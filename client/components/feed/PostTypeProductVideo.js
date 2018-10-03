import React from "react";
import Link from 'next/link'
import suggestedFriendsStyles from '../../static/comp-styles/feed/SuggestedFriends.scss'
import {ICON_MENU_DOTS} from '../static/Icons'; 
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

                <div className="post-description">
                    <div className="post-title">
                        Identity Collection
                    </div>
                    <div className="post-text">
                        Wear your photo
                    </div>
                    <div className="post-tags">
                        <span className="post-tag"><Link  href=""><a>#zarashoes</a></Link></span>
                        <span className="post-tag"><Link  href=""><a>#zaranewcollection</a></Link></span>
                        <span className="post-tag"><Link  href=""><a>#autumn2017</a></Link></span>
                    </div>
                </div>

                <div className="post-body">
                    <div className="post-video">
                        <div className="play-vdo__button">
                            {ICON_ARROW_RIGHT}
                        </div>
                        <img src="../static/images/post-1.png" alt=""/>
                    </div>
                    <Products />
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