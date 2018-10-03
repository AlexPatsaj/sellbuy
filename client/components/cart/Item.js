import React from "react"
import cartStyles from '../../static/comp-styles/cart/Item.scss'
//Components
import Dropdown from  '../general/Dropdown.js'
import Save from  '../general/Save'
import {ICON_HUMAN, ICON_REMOVE, ICON_DISCOUNT_BADGE} from '../static/Icons'
import InputNumber from 'rc-input-number'

export default class Cart extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            value: 1,
            opened: false,
            shipping: 'Seller Shipping (3-5 days)',
            color: "Yellow",
            size: "Uk 9"

        }

        this.shipping = ["Seller Shipping (3-5 days)", "DHL Shipping (1-3 days)","No shipping (Grab from storage)"];
        this.color = ["Green", "Pink", "Yellow"];
        this.size = ["Uk 7.5", "Uk 8", "Uk 9"];
    } 

    onChange = (value) => {
        console.log('onChange:', value);
        this.setState({ value });
    }

    open = () =>{
        this.setState({
           opened: !this.state.opened
        });
    }

    handleChoice = (choice) => {
        this.setState({sortby: choice, opened: false});
    }

    render() {
        return <div className="my-items-item">
                    <div className='my-items__productInfo'>
                        <div className='my-items-item__left'>
                            <img src="../static/images/cart.jpg" alt=""/> 
                        </div>
                        <div className="my-items-item-info">
                            <div className="my-items-item-info-head">
                                <h4>Baebody Retinol Moisturizer Cream for Face and Eye Area</h4>
                                <div className="my-items-item-info-head-wrapper desktop-only">
                                    <div className="my-items__discount-badge">
                                        <div className="my-items__discount-amount">
                                            -10 <span>%</span>
                                        </div>
                                        {ICON_DISCOUNT_BADGE}
                                    </div>
                                    <div className="my-items-item-head-price">
                                        <span className="my-items__old-price">
                                            <strike>$270.20</strike>
                                        </span>
                                        <span className="my-items__new-price">
                                            $230.20
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="my-items-item-info-body">
                                {/* <div className='my-items-variation'>

                                    <div className="my-items-item-parameter">
                                        <div className="parameter__key">
                                            Color:
                                        </div>
                                        <div className="parameter__value">
                                            Red
                                        </div>
                                    </div>
                                    <div className="my-items-item-parameter">
                                        <div className="parameter__key">
                                            Size:
                                        </div>
                                        <div className="parameter__value">
                                            Uk 9
                                        </div>
                                    </div>
                                    <div className="my-items-item-parameter">
                                        <div className="parameter__key">
                                            Qty:
                                        </div>
                                        <div className="parameter__value">
                                            1
                                        </div>
                                    </div>
                                </div> */}

                                <div className='my-items-checkout-options'>
                                    <div className="rLc ">
                                        <Dropdown options={this.size} callback={this.handleChoice.bind(this)} default={this.state.size}/> 
                                        <Dropdown options={this.color} callback={this.handleChoice.bind(this)} default={this.state.color}/>
                                    </div>
                                    <div className="rRc desktop-only480">
                                        <div className="my-items-item-amount">
                                            <div className="parameter__key">
                                                Qty:
                                            </div>
                                            <InputNumber
                                                min={0}
                                                max={99}
                                                style={{ width: 120 }}
                                                value={this.state.value}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <span className="my-items__new-price mobile-only">
                                            $230.20
                                        </span>
                                        <span className='shipping desktop-only'>
                                            <Dropdown options={this.shipping} callback={this.handleChoice.bind(this)} default={this.state.shipping}/>
                                        </span>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="my-items-item-info-bottom desktop-only">
                                <div className="my-item__remove">
                                    {ICON_REMOVE}
                                </div>
                                <div className="my-item__save">
                                    Save for later
                                </div>
                                <div className="item-delivery__cost">
                                    Free Shipping {/* if not free this should update the price */}
                                </div>
                            </div>
                        </div>
                    </div>{/* /ProductInfo */}
                    <div className="rRc mobile-only480">
                        <div className="my-items-item-amount">
                            <div className="parameter__key">
                                Qty:
                            </div>
                            <InputNumber
                                min={0}
                                max={99}
                                style={{ width: 120 }}
                                value={this.state.value}
                                onChange={this.onChange}
                            />
                        </div>
                        <span className="my-items__new-price mobile-only">
                            $230.20
                        </span>
                        <span className='shipping desktop-only'>
                            <Dropdown options={this.shipping} callback={this.handleChoice.bind(this)} default={this.state.shipping}/>
                        </span>
                        
                    </div>
                    <span className='shipping  mobile-only'>
                        <Dropdown options={this.shipping} callback={this.handleChoice.bind(this)} default={this.state.shipping}/>
                    </span>
                    <div className="my-items-item-info-bottom  mobile-only">
                        <div className="my-item__remove">
                            {ICON_REMOVE}
                        </div>
                        <div className="my-item__save">
                            Save for later
                        </div>
                        <div className="item-delivery__cost">
                            Free Shipping {/* if not free this should update the price */}
                        </div>
                    </div>
                <style jsx global>{cartStyles}</style>
        </div>
    }
};