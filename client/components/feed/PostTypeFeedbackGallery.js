import React from "react";
import Link from 'next/link'
import suggestedFriendsStyles from '../../static/comp-styles/feed/SuggestedFriends.scss'
import {ICON_MENU_DOTS, ADD_TO_CART, ICON_CAMERA} from '../static/Icons'; 
import Ratings from 'react-ratings-declarative';
import Products from  './Products'
import Like from  '../general/Like'
import Share from  '../general/Share'
import CommentsIcon from  '../general/CommentsIcon'
import Comments from  './Comments'

export default class SuggestedFriends extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className="post-type feedback-gallery">
                <div className="post-header">
                    <div className="post-general">
                        <div className="post-author">
                            <div className="post-avatar">
                                <img src="../static/images/post-avatar.png" alt=""/>
                            </div>
                            <div className="post-author__name">
                                <strong>Maria</strong> left feedback on <Link href="/"><a>Leather city bag with knotted details</a></Link>
                                <p className="date-time">October 10 at 9:42 pm</p>
                            </div>
                        </div>
                        {/* <div className="post-menu">
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
                        </div> */}
                        
                    </div>
                </div>

                <div className="post-description">
                    
                    <div className="post-feedback">
                        <span className="quote left">“</span>
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
                        <blockquote className="feedback-text">Sed ut perspiciatis unde omnis iste g natus error sit voluptatem accusantium jhhov doloremque laudantium.</blockquote>
                        <span className="quote right">”</span>
                    </div>
                    
                </div>

                <div className="post-body">
                    <div className="post-body__product-block">
                        <div className="post-body__product-wrapper">
                            <div className="product-image">
                                {/* <div className="feed-gallery mobile-only">
                                    {ICON_CAMERA} 12
                                </div> */}
                                <img src="../static/images/product-large2.png" alt=""/>
                            </div>
                            <div className="product-general">
                                <div className="product-description">
                                    <p className="product-name">Vintafe leather city bag with knotted details</p>
                                </div>
                                <div className="post-description feedback-text__block mobile-only">
                                    <div className="product-order">
                                        <div className="product-seller">From <Link href="/seller/zara"><a>Om-nom-nom</a></Link></div>
                                        <div className="btn">
                                            {ADD_TO_CART}
                                            $117.50
                                        </div>
                                    </div>
                                  

                                    <div className="post-feedback">
                                        <span className="quote left">“</span>
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
                                        <blockquote className="feedback-text">Sed ut perspiciatis unde omnis iste g natus error sit voluptatem accusantium jhhov doloremque laudantium.</blockquote>
                                        <span className="quote right">”</span>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    
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