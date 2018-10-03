import React from "react";
import hotDealsStyles from '../../static/comp-styles/offers/HotDeals.scss'
//components
import Save from  '../general/Save'
import Like from  '../general/Like'
import {ICON_DISCOUNT_BADGE} from '../static/Icons'

import HotDealQuarter from './HotDealQuarter';

export default class HotDealsSquarish extends React.Component {
    constructor(props) {
        super (props);

        this.products = [
            {'discount':-20, 'price_old':520.99, 'price': '399', 'img':'../static/images/phones.png' , 'name':'Honor 9 Dual Sim- 64GB, 4GB RAM, 4G LTE, Glacier Grey','n_likes':0, 'seller': {'name':'Honor, Mobile Phones', 'link':'/shop'}},
            {'discount':-20, 'price_old':520.99, 'price': '399', 'img':'../static/images/post-1.png' , 'name':'Red Sweater','n_likes':0, 'seller': {'name':'Zara', 'link':'/shop'}},
            {'discount':-20, 'price_old':520.99, 'price': '399', 'img':'../static/images/product-large2.png' , 'name':'Red Shoes','n_likes':0, 'seller': {'name':'Valentino', 'link':'/shop'}},
            {'discount':-20, 'price_old':300.99, 'price': '150', 'img':'../static/images/product.png' , 'name':'Hot Bag','n_likes':0, 'seller': {'name':'Gucci', 'link':'/shop'}}
        ]; 
    }
    render() {
    return  <div className="hot-deals container">
                <h2 className="any-block__header">HOT DEALS</h2>
                <div className="hot-deals__blocks">
                    <div className="hot-deals__block half">
                        <div className="hot-deals__discount-badge">
                            <div className="hot-deals__discount-amount">
                                -20 <span>%</span>
                            </div>
                            {ICON_DISCOUNT_BADGE}
                        </div>
                        <Save showStats={false}/>
                        <div className="overflow-hidden">
                            <span className="hot-deals__block-price">$520.99 <strike>$399</strike> <span className="hot-deals__block-shipping-price">Free Shipping</span></span>
                            <div className="hot-deals__info">
                                <h3>Honor 9 Dual Sim- 64GB, 4GB RAM, 4G LTE, Glacier Grey</h3>
                                <h4>by <a href='/seller/'>Honor, Mobile Phones</a></h4>
                                
                                <div className="hot-deals__blocks-likes">
                                    <Like likes_number={0}/>
                                </div>
                            </div>
                            <img src="../static/images/hot-deal-half.png" alt=""/>
                        </div>
                    </div>

 					<div className="hot-deals__block quarter">
	                    <HotDealQuarter product={ this.products[0] }/> 
	                    <HotDealQuarter product={ this.products[1] }/>  
	                </div>
	                
 					<div className="hot-deals__block quarter">
	                    <HotDealQuarter  product={ this.products[2] }/> 
	                    <HotDealQuarter  product={ this.products[3] }/>  
	                </div>
                </div>
            </div>

                 
	}
}