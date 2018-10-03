import React, {Component} from "react";
import Link from 'next/link'
import showcaseStyles from '../../static/comp-styles/shop/Showcase.scss'
import {} from '../static/Icons'; 
import Filter from './ShopFilters'; //the designer has diferent filters on the search and shop page, We'll keep different pages 
import TopBar from './TopBar'; 
import SellerProducts from './SellerProducts';


export default class Showcase extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className="shop_showcase container">
                <Filter/>
                <div className="showcase-wrapper">
                    <TopBar/>
                    <SellerProducts/>
                </div>
            <style jsx global>{showcaseStyles}</style>
        </div>
    }
};