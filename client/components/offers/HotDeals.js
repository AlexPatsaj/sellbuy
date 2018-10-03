import React from "react";
import hotDealsStyles from '../../static/comp-styles/offers/HotDeals.scss'
//components
import Save from  '../general/Save'
import Like from  '../general/Like'
import {ICON_DISCOUNT_BADGE} from '../static/Icons'

export default class HotDeals extends React.Component {
    constructor(props) {
        super (props);
    }
    render() {
    return  <div className="hot-deals container">
                <h2 className="any-block__header">
                    <span>{this.props.title ? this.props.title : 'HOT DEALS'}</span>
                    <span class="view-all"><a href="/">View All</a></span>
                </h2>
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
                    <div className="hot-deals__block third">
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
                                <h3>romacci Women Maxi Dress Solid Round Neck Sleeveless Racer</h3>
                                <h4>by <a href='/seller/'>Zara</a></h4>

                                <div className="hot-deals__blocks-likes">
                                    <Like likes_number={0}/>
                                </div>
                            </div>
                            <img src="../static/images/hot-deal-third-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="hot-deals__block third">
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
                                <h3>romacci Women Maxi Dress Solid Round Neck Sleeveless Racer</h3>
                                <h4>by <a href='/seller/'>The Awesome Crew</a></h4>
                                <div className="hot-deals__blocks-likes">
                                    <Like likes_number={0} liked={true}/>
                                </div>
                            </div>
                            <img src="../static/images/hot-deal-third-1.png" alt=""/>
                        </div>
                    </div>

                </div>
                <style jsx global>{hotDealsStyles}</style>
            </div>
    }
};