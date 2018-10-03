import React from "react";
import Link from 'next/link'
import suggestedFriendsStyles from '../../static/comp-styles/feed/SuggestedFriends.scss'
import {ICON_MENU_DOTS, ICON_CHEVRON, ICON_CAMERA} from '../static/Icons'; 
import Slider from "react-slick";
import Products from  './Products'
import Like from  '../general/Like'
import Share from  '../general/Share'
import CommentsIcon from  '../general/CommentsIcon'
import Comments from  './Comments'

export default class SuggestedFriends extends React.Component {
    constructor(props) {
        super (props);
        this.slider={}; 
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
        slidesToShow: 1,
        // variableWidth: true,
        autoplay: false,
        adaptiveHeight: true,
        slidesToScroll: 1,
        swipeToSlide: true, 
        arrows:false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows:false,
                    dots: true,
                },
            }
        ]
    }; 
    return  <div className="post-type products">
                <div className="post-header">
                    <div className="post-general">
                        <div className="post-author">
                            <div className="post-avatar">
                                <img src="../static/images/post-avatar.png" alt=""/>
                            </div>
                            <div className="post-author__name">
                                <strong>Zara</strong>
                                <p className="date-time">1 hour ago</p>
                            </div>
                        </div>
                        <div className="post-menu">
                            {ICON_MENU_DOTS}
                            <div className="post-dropdown">
                                <span className="dropdown-option">
                                    Edit
                                </span>
                                <span className="dropdown-option">
                                    Delete
                                </span>
                                <span className="dropdown-option">
                                    Report inappropriate content
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>

               

                <div className="post-body">
                    <div className="feed-slider__wrapper">
                        <div className="feed-gallery mobile-only">
                            {ICON_CAMERA} 12
                        </div>
                        <div className="arrow-left arrow" onClick={this.prevGroup.bind(this)}>{ICON_CHEVRON}</div>
                        <Slider {...settings} ref={ slider => this.slider = slider}>
                            <div className="post-image">
                                <img src="../static/images/post-1.png" alt=""/>
                            </div>
                            <div className="post-image">
                                <img src="../static/images/post-1.png" alt=""/>
                            </div>
                            <div className="post-image">
                                <img src="../static/images/post-1.png" alt=""/>
                            </div>
                        </Slider>
                        <div className="arrow-right arrow" onClick={this.nextGroup.bind(this)}>{ICON_CHEVRON}</div>
                    </div>
                    <div className="post-description">
                        <div className="post-title">
                            Identity Collection
                        </div>
                        <div className="post-text">
                            Wear your photo
                        </div>
                        <div className="post-tags">
                            <Link  href=""><a className="post-tag">#zarashoes</a></Link> 
                            <Link  href=""><a  className="post-tag">#zaranewcollection</a></Link>
                            <Link  href=""><a className="post-tag">#autumn2017</a></Link>
                        </div>
                    </div>
                    <Products show/>
                </div>
                
            <style jsx global>{suggestedFriendsStyles}</style>
        </div>
    }
};