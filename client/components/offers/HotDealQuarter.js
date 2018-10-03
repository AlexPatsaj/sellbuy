import React from "react";
import hotDealsStyles from '../../static/comp-styles/offers/HotDeals.scss'
//components
import Save from  '../general/Save'
import Like from  '../general/Like'
import {ICON_DISCOUNT_BADGE} from '../static/Icons'

export default class HotDealQuarter extends React.Component {
    constructor(props) {
        super (props);
    }

    render(){
 		return <div className="one">
	                        <div className="hot-deals__discount-badge">
	                            <div className="hot-deals__discount-amount">
	                                {this.props.product.discount} <span>%</span>
	                            </div>
	                            {ICON_DISCOUNT_BADGE}
	                        </div>
                            <Save showStats={false}/>
	                        <div className="overflow-hidden">
	                            <span className="hot-deals__block-price">${this.props.product.price}<strike>${this.props.product.price_old}</strike> <span className="hot-deals__block-shipping-price">Free Shipping</span></span>
	                            <div className="hot-deals__info">
	                                <h3>{this.props.product.name}</h3>
	                                <h4>by <a href={this.props.product.seller.link}>{this.props.product.seller.name}</a></h4>
	                                
	                                <div className="hot-deals__blocks-likes">
	                                    <Like likes_number={this.props.product.n_likes}/>
	                                </div>
	                            </div>
	                            <img src={this.props.product.img} alt=""/>
	                        </div> 
                        </div> 
    }
}