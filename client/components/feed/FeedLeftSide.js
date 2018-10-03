import React from "react";
import Link from 'next/link'

import feedLeftSideStyles from '/static/comp-styles/feed/FeedLeftSide.scss'
import {ICON_CREATE_LIST, ICON_SOCIAL_LINK} from '../static/Icons'; 

import FeedNotifications from  './FeedNotifications'
import SuggestedFriends from  './SuggestedFriends'
import Stores from  './Stores'
  

export default class FeedLeftSide extends React.Component {
    constructor(props) {
        super (props);
        
    } 
    
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        let height = this.divElement.clientHeight;
        this.props.getHeight(height); 
   }
    
    /**
        * todo: why is this ref being lost on resize?  
    */ 
    updateDimensions = () => {
        if(!this.divElement){
            return;
        }

        let height = this.divElement.clientHeight;
        this.props.getHeight(height);
    }

    render() {
    return   <div ref={ (divElement) => this.divElement = divElement}
                className={ 'feed-left__wrapper '  + (this.props.mobileScrolled ? 'detached' : "")}>
                <div className="feed-left">
                    <div className="feed-left__user">
                        <div className="feed-user__avatar">
                            <img src="../static/images/avatar.png" alt=""/>
                        </div>
                        <p className="feed-user__user-name">Mia Smith</p>
                        <p className="feed-user__login">@miasmith</p>
                        <div className="feed-user__media-activity">
                            <span className="media-activity__follow">
                                1.4k following
                            </span>
                            |
                            <span className="media-activity__follow">
                                1.2k followers
                            </span>
                        </div>
                        <div className="btn">Edit Profile</div>
                    </div>
                    {/* <hr/>
                    <SuggestedFriends /> */}
                    <Stores/>
                </div>          
            <style jsx global>{feedLeftSideStyles}</style>
        </div> 
    }
};