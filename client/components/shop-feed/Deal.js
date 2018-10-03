import React from 'react'
import Link from 'next/link'
import hotDealsStyles from '../../static/comp-styles/shop-feed/HotDeals.scss'
import {ICON_SEARCH} from '../static/Icons'; 

export default class HotDeals extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() { 
    	return <div className="shop__deal">
                    <img src="../static/images/more-deals-1.png" alt=""/>
                    <div className="product-name">
                        <Link href="/">
                            <a>2018 Floral Dresses Vestido De Festa Some product name</a>
                        </Link>
                    </div>
                    <span className="hot-deals__block-price discount">
                        <span>$124</span>
                        <strike>$140</strike>
                    </span>
                    <p className="shipping">Free shipping for orders over 200 USD</p>
                <style jsx global>{hotDealsStyles}</style>
            </div>; 
    }
};

