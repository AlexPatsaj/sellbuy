import React from "react";
import Link from 'next/link'
import productInfoStyles from '../../static/comp-styles/product-fashion/ProductInfo.scss'
import {} from '../static/Icons'; 
import ProductMain from  './ProductMain'
import ProductSide from  './ProductSide'

export default class ProductInfo extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className={"product-info " + (this.props.mobile ? 'mobile' : '')}>
                <ProductMain product={this.props.product}/>
                <ProductSide/>
            <style jsx global>{productInfoStyles}</style>
        </div>
    }
};