import React from "react";
import Link from 'next/link'
import productMainStyles from '../../static/comp-styles/product/ProductMain.scss'
import {} from '../static/Icons'; 
import Gallery from  './Gallery'
import Tabs from  './Tabs'
import OrderBox from  './OrderBox'
import AccordionMobile from  './Accordion-mobile'
import SellerBox from  './SellerBox'
import OtherSellers from  './Other-sellers'
import DeliveryBox from  './DeliveryBox'

export default class ProductMain extends React.Component {
    constructor(props) {
        super (props);
    } 

    render() {
    return  <div className={"product-page__main " + (this.props.mobile ? 'mobile' : '')}>
                <Gallery product={this.props.product}/>
                <OrderBox mobile/>
                <DeliveryBox mobile/>
                <AccordionMobile/>
                <SellerBox mobile/>
                <OtherSellers/>
                <Tabs />
            <style jsx global>{productMainStyles}</style>
        </div>
    }
};