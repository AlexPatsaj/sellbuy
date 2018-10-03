import React from "react";
import Link from 'next/link'
import checkoutStyles from '../../static/comp-styles/checkout/Checkout.scss'
import {} from '../static/Icons'; 
import Accordion from  './Accordion'
import Summary from  './Summary'

export default class Checkout extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
    render() {
    return  <div className="checkout-page container">
                <h1 className="any-block__header">Secure Checkout</h1>
                <div className="checkout-page__wrapper">
                    <div className="checkout-page__accordion">
                        <Accordion/>
                    </div>
                    <div className="checkout-page__summary">
                        <Summary/>
                    </div>
                </div>
            <style jsx global>{checkoutStyles}</style>
        </div>
    }
};