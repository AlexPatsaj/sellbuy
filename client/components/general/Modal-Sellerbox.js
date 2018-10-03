import React from "react";
import Link from 'next/link'
import otherProductsStyles from '../../static/comp-styles/shop/Modal-Sellerbox.scss'
import {ICON_CHEVRON, ICON_HUMAN} from '../static/Icons'; 
import Slider from "react-slick";
import Ratings from 'react-ratings-declarative';
import Follow from '../general/FollowButton';

export default class OtherProducts extends React.Component {
    constructor(props) {
        super (props);
        this.slider={}; 
        this.state = {
            
        }; 
    } 

    nextGroup(){
        this.slider.slickNext(); 
    }

    prevGroup(){
        this.slider.slickPrev(); 
    }

    render() {
    let settings = {
        lazyLoad: 'progressive',
        nextSlidesToPreload: 3,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        // variableWidth: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        swipeToSlide: true, 
        arrows:false,
    }; 
    return  <div className="sellerbox-modal">
            <hr/>
                <div className="sellerbox-wrapper">
                    <div className="sellerbox-avatar avatar">
                        <div className={"online-status" + (this.props.active ? ' active' : '')}></div>
                        <img src="../static/images/avatar.png" alt=""/>
                    </div>
                    <div className="seller-general__info">
                        <span>
                            <p>Seller</p>
                            <p><strong>Uvuvwevwevwe O.</strong></p>
                        </span>
                    </div>
                    <div className="seller-wrapper">
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
                        <div className="social-activity__event commented">
                            <div className="avatar">
                                <img src="../static/images/pic-1.png" alt=""/>
                            </div>
                            <div className="avatar">
                                <img src="../static/images/pic-1.png" alt=""/>
                            </div>
                            <span>2 of your friends commented on this item</span>
                        </div>
                    </div>
                </div>
            <hr/>
                <h3>Other Products From This Seller</h3>
                <div className="slider-wrapper">
                    <div className="arrow-left arrow"  onClick={this.prevGroup.bind(this)}>{ICON_CHEVRON}</div>
                    <div className="woop-woop">
                        <Slider {...settings} ref={ slider => this.slider = slider}>
                            <img src="../static/images/shop-product-1.png" alt=""/>
                            <img src="../static/images/shop-product-1.png" alt=""/>
                            <img src="../static/images/shop-product-1.png" alt=""/>
                            <img src="../static/images/shop-product-1.png" alt=""/>
                            <img src="../static/images/shop-product-1.png" alt=""/>
                            <img src="../static/images/shop-product-1.png" alt=""/>
                        </Slider>
                    </div>
                    <div className="arrow-right arrow" onClick={this.nextGroup.bind(this)}>{ICON_CHEVRON}</div>
                </div>
            <style jsx global>{otherProductsStyles}</style>
        </div>
    }
};