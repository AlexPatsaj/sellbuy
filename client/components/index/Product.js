import React from "react";
import productsStyles from '../../static/comp-styles/index/Product.scss'
import {ADD_TO_CART,
        ICON_SOCIAL_FACEBOOK,
        ICON_SOCIAL_INSTAGRAM,
        ICON_SOCIAL_LINKEDIN,
        ICON_SOCIAL_PINTEREST,
        ICON_SOCIAL_TWITTER,
        ICON_SOCIAL_LINK} from '../static/Icons'; 
import Share from  '../general/Share'
import Save from  '../general/Save'
import Like from  '../general/Like'
import CommentsIcon from  '../general/CommentsIcon'

import Ratings from 'react-ratings-declarative';
import { Modal, ModalManager, Effect} from 'react-dynamic-modal/lib';

import BtnAdd2Cart from '../general/BtnAdd2Cart'; 

export default class ProductSearchResult extends React.Component {
    constructor(props) {
        super (props);

    } 

    // openModal = (e)=> {
    //     e.preventDefault();
    //     ModalManager.open(<ProductModal product={this.props.product} onRequestClose={() => true}/>);
    // }

    render() {
    return  <div className="shop-product">
                <div className="shop-product__wrapper">
                    <div className="one-more-wrapper">
                        {this.props.product.discount ? <div className='shop-product__discountPercent'>{this.props.product.discount}% OFF</div> : null}

                        <img src={this.props.product.img} alt="" onClick={this.openModal}/>
                    </div>
                    <div className="bottom-wrapper">
                        <span className="product-name">{this.props.product.name}</span>
                        <div className="product-price">
                            <span className="price">BD {this.props.product.price} <strike>{this.props.product.price_old ? this.props.product.price_old : null}</strike></span>
                        </div>
                    </div>
                </div>
            <style jsx global>{productsStyles}</style>
        </div>
    }
};