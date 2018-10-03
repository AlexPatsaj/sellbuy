import React from "react";
import Link from 'next/link'
import productSideStyles from '../../static/comp-styles/product-fashion/ProductSide.scss'
import {} from '../static/Icons'; 
import OrderBox from  './OrderBox'
import DeliveryBox from  './DeliveryBox'
import SellerBox from  './SellerBox'
import SocialActivity from  './SocialActivity'

export default class ProductSide extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className={"product-page__side " + (this.props.mobile ? 'mobile' : '')}>
                <OrderBox/>
                <DeliveryBox />
                <SellerBox />
                <SocialActivity />
            <style jsx global>{productSideStyles}</style>
        </div>
    }
};