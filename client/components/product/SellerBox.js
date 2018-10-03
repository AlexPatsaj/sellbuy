import React from "react";
import Link from 'next/link'
import sellerBoxStyles from '../../static/comp-styles/product/SellerBox.scss'
import {ICON_HUMAN, ICON_CREATE_LIST, ICON_ADD_IMAGE } from '../static/Icons'; 
import Ratings from 'react-ratings-declarative';
import Follow from '../general/FollowButton';

export default class SellerBox extends React.Component {
    constructor(props) { 
        super (props);
    } 
    render() {
    return  <div className={"product-page__seller-box " + (this.props.mobile ? 'mobile-only' : '')}>
                <div className="seller-general">
                    <div className="seller-general__avatar avatar">
                        <img src="../static/images/pic-1.png" alt=""/>
                    </div>
                    <div className="seller-wrapper">
                        <div className="seller-general__info">
                            <span>
                                <p>Seller</p>
                                <p><strong>Melissa S.</strong></p>
                            </span>
                            <Follow followed={12}/>
                        </div>
                        <div className="seller-rating">
                            <Ratings
                                rating={3.5}
                                widgetRatedColors="#F7D620"
                                widgetEmptyColors="#ccc"
                                widgetHoverColors="#F7D620"
                                widgetDimensions="16px"
                                widgetSpacings="2px"
                                changeRating={this.changeRating}
                                typeOfWidget='Star'
                            >
                                <Ratings.Widget/>
                                <Ratings.Widget/>
                                <Ratings.Widget/>
                                <Ratings.Widget/>
                                <Ratings.Widget/>
                            </Ratings>
                            <div className="followers">
                                {ICON_HUMAN}
                            </div>
                            8.6K
                        </div>
                    </div>
                </div>
                <div className="seller-gallery">
                    <img src="../static/images/product-gallery.png" alt=""/>
                    <img src="../static/images/product-gallery.png" alt=""/>
                    <img src="../static/images/product-gallery.png" alt=""/>
                    <img src="../static/images/product-gallery.png" alt=""/>
                </div>
                <div className="seller-question">
                    <Link href=""><a>Ask a Question</a></Link>
                </div>
            <style jsx global>{sellerBoxStyles}</style>
        </div>
    }
};