import React from "react";
import Link from 'next/link'
import sellerProductsStyles from '../../static/comp-styles/shop/SellerProducts.scss'
import {} from '../static/Icons'; 

import Product from  '../general/ProductSearchResult.js'

/** what is this component for? the search pages wrapper will be diferent but the p
productpreviewSearch should be the same  **/ 

/** A: I thougnt to map products here **/ 
import Midddly from '../../models/Midddly'; 

export default class SellerProducts extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            'products': []
        }; 
    } 

    componentDidMount(){
        this.setState({'products':Midddly.getProducts()});         
    }

    render() {
    return  <div className="shop-products">
                {
                    this.state.products.map((product,idx) =>{
                        return <Product product={product} key={"product"+idx} />
                    })
                }
            <style jsx global>{sellerProductsStyles}</style>
        </div>
    }
};