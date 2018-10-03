import React from "react";
import myItemsStyles from '../../static/comp-styles/cart/MyItems.scss'
import {ICON_DELIVERY, ICON_RETURN, ICON_REWARD} from '../static/Icons'; 
import Item from './Item'

import Seller from './Seller'
export default class MyItems extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
    render() {
    return <div className="my-items container">
                <div className="shadow-wrapper">
                    <h3 className="my-items-header">My items (4)</h3>
                    <Seller/>
                    <Item usercity={'Lisbon'}/>
                    <hr/>
                    <Item usercity={'Lisbon'}/>
                    <Seller/>
                    <Item usercity={'Lisbon'}/>
                    <hr/>
                    <Item usercity={'Lisbon'}/>

                    <div className="my-items-total">
                        <div className="btn btn-checkout">CHECKOUT</div>
                        <div className="my-items-calculation">{/*<div className='hideOnMobile my-items-calculation-details'>*/}                   {/*<div className="btn grey">Continue Shopping</div>*/}
                            
                                <div className="calculation calculation__subtotal">
                                    <span className="text">Sub-Total:</span> <span className="amount-number">$238.00</span>
                                </div> 
                                <div className="calculation calculation__savings">
                                    <span className="text">Estimated Shipping:</span> <span className="amount-number"> $5 </span>
                                </div> 
                                <div className="calculation calculation__total">
                                    <span className="text">TOTAL:</span><span className="amount-number">$166.60</span>
                                </div>
                        </div> 
                    </div> 
                </div>

                <div className="my-items-features">
                    <div className="my-items-feature">
                        <div className="feature-title">
                            {ICON_DELIVERY}
                            Free Standard Delivery
                        </div>   
                        <div className="feature-text">
                            Bacon ipsum dolor amet frankfurter landjaeger porchetta hamburger jowl pork chop
                        </div>
                    </div>
                    <div className="my-items-feature">
                        <div className="feature-title">
                            {ICON_RETURN}
                            Free {'&'} Easy Returns
                        </div>   
                        <div className="feature-text">
                            Bacon ipsum dolor amet frankfurter landjaeger porchetta hamburger jowl pork chop
                        </div>
                    </div>
                    <div className="my-items-feature">
                        <div className="feature-title">
                            {ICON_REWARD}
                            Rewarding Points System
                        </div>   
                        <div className="feature-text">
                            Bacon ipsum dolor amet frankfurter landjaeger porchetta hamburger jowl pork chop
                        </div>
                    </div>
                </div>

            <style jsx global>{myItemsStyles}</style>
        </div>
    }
};