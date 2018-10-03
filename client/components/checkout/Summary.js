import React from "react";
import Link from 'next/link'
import summaryStyles from '../../static/comp-styles/checkout/Summary.scss'
import {} from '../static/Icons'; 


export default class Summary extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            subtotal: 245,
            saved: 30,
            shipping: 5.99,
            tax: 0.94, /* 6% tax*/
        }
    }

    calculateTotal = () => {
        let summ = ((this.state.subtotal + this.state.shipping) * this.state.tax)
        return summ.toFixed(2);
    }

    render() {
    return  <div className="summary container">
                <div className="summary-wrapper order-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-line">
                        <span className="summary-option">
                            Sub-total
                        </span>
                        <span className="summary-option">
                            ${this.state.subtotal}
                        </span>
                    </div>
                    <div className="summary-line">
                        <span className="summary-option">
                            Saved
                        </span>
                        <span className="summary-option">
                            ${this.state.saved}
                        </span>
                    </div>
                    <div className="summary-line">
                        <span className="summary-option">
                            Shipping
                        </span>
                        <span className="summary-option">
                            ${this.state.shipping}
                        </span>
                    </div>
                    <div className="summary-line">
                        <span className="summary-option">
                            Tax
                        </span>
                        <span className="summary-option">
                            ${this.state.tax}
                        </span>
                    </div>
                </div>
                <div className="summary-wrapper">
                    <h2>Order Total
                        <span className="order-total">
                            ${this.calculateTotal()}
                        </span>
                    </h2>
                    <div className="btn grey">
                        Place Order
                    </div>
                </div>
            <style jsx global>{summaryStyles}</style>
        </div>
    }
};