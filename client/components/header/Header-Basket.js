import React from "react";
import basketStyles from '../../static/comp-styles/header/Header-Basket.scss'
import Link from 'next/link'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {ICON_BASKET} from '../static/Icons'; 
import Cart from '../../models/Cart'; 
import {headerReducer} from '../../reducers/Header'; 
import {openCloseAction} from '../../actions/HeaderActions';

 
export default class Basket extends React.Component {
    constructor(props) {
        super (props); 
        this.state = { 
            isOpen: false,
            cart: {
                total:0,
                products:[]
            }
        }

        let that = this; 
        headerReducer.subscribe(() => {
            let state = headerReducer.getState();  
            console.log("subscribed Basket " , state); 

            if((state.area && state.area != 'basket')  && that.state.isOpen){ //some other area was opened and we are open 
                that.openClose(null); 
            }
        }); 
    }
  
    openClose(event, area){ 
        this.setState({
            isOpen: !this.state.isOpen
        }); 
        
//      if we are opening , thell others to close 
        if(event){
            headerReducer.dispatch( openCloseAction('basket') );     
        } 
    }
 

    componentDidMount(){
        this.setState({
            'cart': Cart
        }); 

        //declareourselves as wanting to know if someone changed the cart obj
        Cart.addListener(this.cartChanged.bind(this)); 
    }

    /*
        * @param cart - a cart object 
        * this function will be called whenever the cart object is changed 
    */
    cartChanged (cart){
        console.log("Cart was changed we are updating the state ",cart); 
        this.setState({
            cart
        });
    }

    /*
        * @param event - the mouse event that triggered this function 
        * @param idx - the index of the product to remove 
        * Removed the product at index idx 
    */
    removeProduct(event, idx){ 
        Cart.removeProduct(idx);  
    }

    increaseQty = (idx) => {
        Cart.productInc(idx);
    }
    
    decreaseQty = (idx) => {
        Cart.productDec(idx); 
    }

    render() {
    return  <div className={"basket"+ (this.state.isOpen ? ' open':'') }>
                <span  onClick={this.openClose.bind(this)}>{ICON_BASKET}</span>
                {  this.state.cart.products.length ? <span className="goods-added"> { this.state.cart.products.length } </span> : null}
                <div className={"basket-dropdown" + (this.state.cart.products.length === 0 ? ' empty' : "")}>
                    <div className="dropdown-triangle-up">▲</div>
                    <div className="basket-dropdown__title" onClick={this.openClose.bind(this)}>
                        <div className="basket-dropdown__title-wrapper">
                            My cart
                            {this.state.cart.products.length > 0 && <p className="basket-dropdown__number-of-items">
                                { this.state.cart.products.length } items
                            </p>}
                        </div>
                        <div className="basket-dropdown-mobile-x">
                            <span className="mobile-x-alignment">
                                ×
                            </span>
                        </div>
                    </div>
                    <div className="basket-dropdown__items-list">
                        <PerfectScrollbar>
                            <div className="basket-dropdown__items-wrapper">
                                {   
                                    this.state.cart.products.map( (prod, idx) => {

                                        return <React.Fragment key={'prod'+idx}>
                                                <div className="basket-dropdown__item" key={"basketItem"+idx}>
                                                    <img src={prod.img} alt=""/>
                                                    <div className="basket-dropdown__item-info">
                                                        <p className="item-name">{prod.name}</p>
                                                        <div className="item-parameters">
                                                        {prod.attributes.map( (attr, idx)=> {
                                                            return <p className="size" key={"prod-attr-"+idx}>{attr.name}: <span>{attr.value}</span> </p>
                                                        } )} 
                                                        </div>
                                                        <p className='qty'>Quantity: 
                                                            <span className={"btn grey " + (prod.qty <= 1 ? "disabled" : null)} onClick={prod.qty  <= 1 ? null : () =>{this.decreaseQty(idx)}}>-</span> 
                                                            {prod.qty} 
                                                            <span className="btn grey " onClick={() => {this.increaseQty(idx)}}>+</span>
                                                        </p>
                                                        <div className="basket-dropdown__remove" onClick={ (event) => { this.removeProduct(event,idx)} }>
                                                            Remove
                                                        </div>
                                                    </div>
                                                    <div className="basket-dropdown__item-price">
                                                        <p className="price">${prod.price}</p>
                                                        {prod.price_old && <p className="old-price">${prod.price_old}</p>}
                                                    </div>
                                                </div>
                                                <hr/>
                                            </React.Fragment>
                                    })
                                }   
                                {this.state.cart.total == 0 && "Your cart is empty" }
                            </div>
                        </PerfectScrollbar>
                        <div className="subtotal">
                            <div className="basket-dropdown__shipping-info">
                                Free shipping on orders over $200
                            </div>
                            <div className="basket-dropdown__subtotal">
                                {this.state.cart.total > 0 && ( <React.Fragment>Subtotal: <span className="basket-subtotal-amount">${this.state.cart.total}</span></React.Fragment>) }
                            </div>
                        </div>
                    </div>
                    <div className="basket-dropdown__buttons">
                        <Link href="/cart"><a className="btn grey">View Cart</a></Link>
                        {this.state.cart.products.length > 0 && <Link href="/checkout"><a className="btn">Checkout</a></Link>}
                    </div>

                </div> 
                <style jsx global>{basketStyles}</style>
            </div>;
        }
    };