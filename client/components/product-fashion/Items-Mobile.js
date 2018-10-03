import React from "react";
import Link from 'next/link'
import alsoViewedStyles from '../../static/comp-styles/product-fashion/AlsoViewed.scss'
import {ICON_USER_ARROW} from '../static/Icons';
import ProductSlide from "./Product-Slide"
import PerfectScrollbar from 'react-perfect-scrollbar'

export default class AlsoViewed extends React.Component {
    constructor(props) {
        super (props);
        this.slider={}; 
    } 
    nextProduct(){
        this.slider.slickNext(); 
    }

    prevProduct(){
        this.slider.slickPrev(); 
    }

    render() {
    return  <div className={"also-viewed__mobile mobile-only"}>
                <h3>{this.props.title}</h3>
                <PerfectScrollbar>
                    <ProductSlide/>
                    <ProductSlide/>
                    <ProductSlide/>
                    <ProductSlide/>
                    <ProductSlide/>
                    <ProductSlide/>
                    <ProductSlide/>
                    <ProductSlide/>
                    <ProductSlide/>
                    <ProductSlide/>
                </PerfectScrollbar>
                <span className="view-all"><Link><a href="/">View All {ICON_USER_ARROW}</a></Link></span>
            <style jsx global>{alsoViewedStyles}</style>
        </div>
    }
};