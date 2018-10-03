import React from "react";
import Link from 'next/link'
import greetingPopupStyles from '/static/comp-styles/general/GreetingPopup.scss'
import {ICON_CIRCLE_FLAG_BH, ICON_CIRCLE_FLAG_AE, ICON_CIRCLE_FLAG_SA, ICON_MASTERCARD, ICON_VISA, ICON_PAYPAL} from '../static/Icons' 
import cookie from 'react-cookies'

export default class GreetingPopup extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            country: 'Bahrain',
            hidden: true
        }
    }
    
    componentDidMount() {
        if (cookie.load('visited') === true) {
            return
        } else if (cookie.load('visited') === undefined) {
            this.setState({ hidden: false })
        }
    }

    handleClose = () => {
        this.setState({ hidden: true });  
        cookie.save('visited', true, { path: '/' }); 
    }

    render() { 
    return <div className={"f6f6f7 greeting-popup" + (this.state.hidden ? ' hidden' : '')}>
            <ul className="greeting-list">
                <span className="container">
                    <li className="greeting-list__element">Welcome to Midddly</li>
                    <li className="greeting-list__element"><Link href='/'><a>Help</a></Link></li>
                    <li className="greeting-list__element"><Link href="/"><a>About Us</a></Link></li>
                    <li className="greeting-list__element"><Link href="/"><a>Midddly Mobile</a></Link></li>
                    <li className="greeting-list__element" onClick={this.handleClose.bind(this)}>×</li>
                </span>
            </ul>
            <div className="greeting-info">
                <span className="container">
                    <div className="greeting-location">
                        <div className="location">
                            {ICON_CIRCLE_FLAG_BH}
                            <span className="country">You're in {this.state.country}</span>
                        </div>
                        <Link href=''><a className='greeting-location__change'>Change</a></Link>
                    </div>
                    <div className="country-benefits">
                        <div className="benefits-wrapper">
                            <h4>Shoppers in {this.state.country} get:</h4>
                            <ul className="country-benefits__list">
                                <li>Free delivery {'&'} Returns</li>
                                <li>Next Day Delivery Available</li>
                            </ul>
                        </div>
                    </div>
                    <div className="payment-methods">
                        <span className="mastercard">{ICON_MASTERCARD}</span>
                        <span className="visa">{ICON_VISA}</span>
                        <span className="paypal">{ICON_PAYPAL}</span>
                    </div>
                </span>
            </div>
        <style jsx global>
      {greetingPopupStyles}
    </style>
</div>
}}