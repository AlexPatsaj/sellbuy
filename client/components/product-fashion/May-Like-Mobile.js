import React from "react";
import mayLikeMobileStyles from '../../static/comp-styles/product-fashion/May-Like-Mobile.scss'
import Link from 'next/link'
import {} from '../static/Icons'; 
import ReactDOM from 'react-dom'; 
// import Item from './Item.js';
import ProductSlide from "./Product-Slide"
import PerfectScrollbar from 'react-perfect-scrollbar'

export default class MayLikeMobile extends React.Component {
    constructor(props) {
        super(props); 
        
    }


    render(){
    	return <div className="may-like mobile-only">
            <h3>Items you may also like</h3>
            <div className="may-like__wrapper">
                <PerfectScrollbar>
                    <ProductSlide discount/>
                    <ProductSlide/>
                    <ProductSlide/>
                    <ProductSlide/>
                </PerfectScrollbar>
            </div>
            <style jsx global>{mayLikeMobileStyles}</style>
        </div>
    }
}