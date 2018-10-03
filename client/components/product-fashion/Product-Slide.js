import React from "react";
import Link from 'next/link'
import productSlideStyles from '../../static/comp-styles/product-fashion/Product-Slide.scss'
import {ICON_DISCOUNT_BADGE} from '../static/Icons'; 
import Like from  '../general/Like'
import CommentsIcon from  '../general/CommentsIcon'
import Share from  '../general/Share'
import Save from  '../general/Save'

export default class ProductSlide extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className="product-slide">
                <div className="product-wrapper">
                    {
                        this.props.discount ? 
                            <div className="product-discount__badge">
                                <div className="product-discount__amount">
                                    -20 <span>%</span>
                                </div>
                                {ICON_DISCOUNT_BADGE}
                            </div> : null
                    }
                    
                    <img src="../../static/images/recommendation-1.jpg" alt=""/>
                    <div className="slide-text__wrapper">
                        <h3>Cashmere Pullover</h3>
                        <span className="__block-shipping-price">Free Shipping</span>
                        <span className={"__block-price" + (this.props.discount ? ' discount' : "")}>
                            $124
                        </span>
                        <span className="media-activity">
                            <div className="__block-activity" title="Likes">
                                <Like likes_number={this.props.likes_number} liked={false}/>
                            </div>
                            <div className="__block-activity" title="Comments">
                                <CommentsIcon comments_number={7}/>
                            </div>
                            <div className="__block-activity" title="Share">
                                <Share shares_number={34} horisontal={true}/>
                            </div>
                            <div className="__block-activity" title="Save">
                                <Save product_id='0' showStats={5}/>
                            </div>
                        </span>
                    </div>
                </div>
            <style jsx global>{productSlideStyles}</style>
        </div >
    }
};