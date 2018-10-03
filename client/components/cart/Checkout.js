import React from "react";
import checkoutStyles from '../../static/comp-styles/cart/Checkout.scss'

import Link from 'next/link'
export default class Checkout extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
    render() {
    return <div className="checkout container">
                <div className="checkout-summary">
                    <h3>Order Summary</h3>
                    <div className="checkout-row">
                        <div className="checkout-cell">
                            Merchandise Subtotal
                        </div>
                        <div className="checkout-cell">
                            <strong>285$</strong>
                        </div>
                    </div>
                    <div className="checkout-row">
                        <div className="checkout-cell">
                            Shipping{'&'}Handling
                        </div>
                        <div className="checkout-cell">
                            <strong>0$</strong>
                        </div>
                    </div>
                    <div className="checkout-row">
                        <div className="checkout-cell">
                            Tax
                        </div>
                        <div className="checkout-cell">
                            <strong>0$</strong>
                        </div>
                    </div>
                </div>
                <div className="checkout-estimated-total">
                    <h3>Estimated Total <span className="estimated-total"><strong>285$</strong></span></h3>
                    <div className="checkout-estimated-disclaimer">
                        Ships and taxes calculated during checkout
                    </div>
                </div>

                <div className="checkout-promo-code">
                   {/* <h3>Promo Code 
                        <span>
                        <Link href="/"><a>View promo codes</a></Link>
                        <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 14 16.9" enableBackground="new 0 0 14 16.9">
                            <path d="M7,10.5L3.8,7.3c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0L7,9.1l2.6-2.5c0.2-0.2,0.5-0.2,0.7,0
                                c0.2,0.2,0.2,0.5,0,0.7L7,10.5z"/>
                        </svg>
                        </span>
                    </h3>
                */}
                    <div className="promo-code-disclaimer">
                        Ships and taxes calculated during checkout
                        {/*<input type="text" name="promo-code" placeholder="Enter Code" maxLength="6" className="promo-code__input"/>*/}
                     
                        <div className="btn btn-checkout">CHECKOUT</div>
                        <div className="promo-points">
                            <span>393 Points </span> to be earned

                        </div>
                    </div>
                </div>
                
            <style jsx>{checkoutStyles}</style>
        </div>
    }
};