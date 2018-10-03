import React from "react";
import { throttle } from 'lodash';
import cartStyles from '../../static/comp-styles/cart/Cart-component.scss'
//Components
import Recommended from  './Recommended.js'
import MyItems from  './MyItems.js'
import Checkout from  './Checkout.js'
import {ICON_VISA, ICON_PAYPAL, ICON_MASTERCARD} from '../static/Icons'; 


import MidddlyInterface from '../../models/MidddlyInterface';

export default class Cart extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    }

    setSticky() {
      if(window.innerWidth > 768) {
        MidddlyInterface.stickElements(document.querySelectorAll('.sticky') );
      } else {
        MidddlyInterface.unstickElements(document.querySelectorAll('.sticky') );
      }
    }

    componentDidMount(){
      window.addEventListener("resize", throttle(this.setSticky, 100));
      this.setSticky();
    }

    render() {
        return <div className="cart container">
                    <h1 className="cart-header">My Cart</h1>
                    <div className="card-wrapper">
                        <div className="card-items">
                            <MyItems/>
                            <span className='hideOnMobile'><Recommended/></span>
                        </div>
                        <div className="card-checkout sticky">
                            <Checkout/>
                            <div className="need-assistance">
                                <div className="need-assistance__wrapper">
                                    <h3>We Accept {/*Need Assistance?*/}</h3>
                                    {/*<p>Toll free: <strong>1-877-235-564</strong></p>
                                    <p>Free return and Shipping policy</p>*/}
                                    
                                    <div className="need-assistance__logos">
                                        <div className="master">
                                            {ICON_MASTERCARD}
                                        </div>
                                        <div className="visa">
                                            {ICON_VISA} 
                                        </div>
                                        <div className="paypal">
                                            {ICON_PAYPAL}
                                        </div>
                                        <div className="cash">
                                            Cash
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/** / card-checkout */}

                        <span className='hideOnDesktop recommendedMobile'><Recommended/></span>
                    </div>
                    
                <style jsx>{cartStyles}</style>
        </div>
    }
};