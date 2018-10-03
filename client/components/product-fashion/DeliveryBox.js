import React from "react";
import Link from 'next/link'
import deliveryBoxStyles from '../../static/comp-styles/product-fashion/DeliveryBox.scss'
import {ADD_TO_CART, ICON_MASTERCARD, ICON_VISA, ICON_PAYPAL} from '../static/Icons'; 
import Gallery from  './Gallery'
import Tabs from  './Tabs'

export default class DeliveryBox extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className={"product-page__delivery-box " + (this.props.mobile ? 'mobile' : '')}>
                <div className="delivery-box__option">
                    <span>Estimated Delivery</span>
                    <span>7-14 days to <Link href=""><a>Bahrain</a></Link></span> 
                </div>
                {/** we will only show this if there is a cost associated with shipping this product */ }
                <div className="delivery-box__option">
                    <span>Ships From</span>
                    <span>Canada</span>
                </div>
                <div className="delivery-box__option">
                    <span>Return Policy</span>
                    <span>No Returns. <Link href=""><a>View details</a></Link></span>
                </div>
                <div className="delivery-box__option">
                    <div className = "title">Payment Methods</div>
                    <div className="paycard">
                        <img src="../static/images/visa-icon.png" alt=""/>
                        <img src="../static/images/pay-icon.png" alt=""/>
                        <img src="../static/images/mastercard-icon.png" alt=""/>
                        
                       
                    </div>
                </div>
            <style jsx global>{deliveryBoxStyles}</style>
        </div>
    }
};