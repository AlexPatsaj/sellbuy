import React from "react";
import Link from 'next/link'
import deliveryBoxStyles from '../../static/comp-styles/product/DeliveryBox.scss'
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
                    <span>Shipping Cost</span>
                    <span>$000</span>
                </div>
                <div className="delivery-box__option">
                    <span>Return Policy</span>
                    <span>No Returns. <Link href=""><a>View details</a></Link></span>
                </div>
                <div className="delivery-box__option">
                    <span>Payment Methods</span>
                    <span>
                        <span className="master">
                            {ICON_MASTERCARD}
                        </span>
                        <span className="visa">
                            {ICON_VISA}
                        </span>
                        <span className="paypal">
                            {ICON_PAYPAL}
                        </span>
                    </span>
                </div>
            <style jsx global>{deliveryBoxStyles}</style>
        </div>
    }
};