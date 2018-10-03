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
    // nextGroup(){
    //     this.slider.slickNext(); 
    // }

    // prevGroup(){
    //     this.slider.slickPrev(); 
    // }
    render() {
    // let settings = {
    //     lazyLoad: 'progressive',
    //     nextSlidesToPreload: 3,
    //     dots: false,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 1,
    //     // variableWidth: true,
    //     autoplay: false,
    //     slidesToScroll: 3,
    //     swipeToSlide: true, 
    //     arrows:false,
    //     responsive: [
    //         {
    //             breakpoint: 640,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 variableWidth: false,
    //                 arrows:false,
    //                 dots: true,
    //             },
    //         }
    //     ]
    // }; 
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
                    
                    <Products show/>
                    <div className="social-icons">
                        <Like likes_number={22}/>
                        <CommentsIcon comments_number={7}/>
                        <Share shares_number={12} horisontal={true}/>
                    </div>
                    <Comments/>
                </div>
                
            <style jsx global>{suggestedFriendsStyles}</style>
        </div>
    }
};