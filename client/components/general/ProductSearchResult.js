import React from "react";
import Link from 'next/link'
import productsStyles from '../../static/comp-styles/shop/Product.scss'
import {ADD_TO_CART,
        ICON_SOCIAL_FACEBOOK,
        ICON_SOCIAL_INSTAGRAM,
        ICON_SOCIAL_LINKEDIN,
        ICON_SOCIAL_PINTEREST,
        ICON_SOCIAL_TWITTER,
        ICON_SOCIAL_LINK} from '../static/Icons'; 
import Share from  '../../components/general/Share'
import Save from  '../../components/general/Save'
import Like from  '../../components/general/Like'
import CommentsIcon from  '../../components/general/CommentsIcon'
// import CommentsIcon from  '../../components/general/CommentsIcon.scss'
import Ratings from 'react-ratings-declarative';
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import ProductModal from "./ProductModal"; 

import BtnAdd2Cart from '../../components/general/BtnAdd2Cart'; 

export default class ProductSearchResult extends React.Component {
    constructor(props) {
        super (props);

    } 

    openModal = (e)=> {
        e.preventDefault();
        ModalManager.open(<ProductModal product={this.props.product} onRequestClose={() => true}/>);
    }

    render() {
    return  <div className="shop-product">
                <div className="shop-product__wrapper">
                    <div className="one-more-wrapper">
                        <div className="shop-product__img-wrapper">
                            <img src={this.props.product.img} alt="" onClick={this.openModal}/>
                            {/* <BtnAdd2Cart product={this.props.product}/> */}
                        </div>
                        <div className="__block-title">
                          {/* <h3>{this.props.product.name}</h3>
                           <div className="flex-ai-jcsb cta">
                                <div className="__block-rating">
                                    <Ratings
                                        rating={this.props.product.rating}
                                        widgetRatedColors="#F7D620"
                                        widgetEmptyColors="#ccc"
                                        widgetDimensions="14px"
                                        widgetSpacings="2px"
                                        changeRating={this.changeRating}
                                        typeOfWidget='Star'
                                    >
                                        <Ratings.Widget widgetHoverColor="#F7D620"/>
                                        <Ratings.Widget widgetHoverColor="#F7D620"/>
                                        <Ratings.Widget widgetHoverColor="#F7D620"/>
                                        <Ratings.Widget widgetHoverColor="#F7D620" />
                                        <Ratings.Widget widgetHoverColor="#F7D620"/>
                                    </Ratings>
                                    <span className="voters">({this.props.product.nRatings})</span>
                                </div>
                                
                            </div> */}
                        </div> 
                        {/*<div className="shop-products__seller-name">
                            <p className="seller-title">
                                By
                            </p>
                            <p className="seller-name">
                            {this.props.product.seller.name}
                            </p>
                        </div>*/}
                       
                       
                    </div>
                    <div className="bottom-wrapper">
                        <div className="__block-other-general">
                            <span className="__block-price discount">
                                <div className="currency">BD</div> {this.props.product.price}
                                {/*<strike>434</strike>*/}
                                {this.props.product.discount && <div className='shop-product__discountPercent'>{this.props.product.discount}% OFF</div>}
                            </span>
                            <div className="__block-shipping-price">Free Shipping</div>
                            <div className="media-activity">
                                <div className="__block-activity" title="Comments">
                                    <CommentsIcon comments_number={37}/>
                                </div>
                                <div className="__block-activity" title="Likes">
                                    <Like likes_number={76}  isLiked={this.props.product.isLiked} callback={ () => { Midddly.likeProduct(this.props.product.idLiked ) }}/>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            <style jsx global>{productsStyles}</style>
        </div>
    }
};