import React from "react";
import Link from 'next/link'

import postsStyles from '/static/comp-styles/feed/Posts.scss'
import {ICON_SOCIAL_LINK, ADD_TO_CART, ICON_ARROW_RIGHT, ICON_MENU_DOTS} from '../static/Icons' 
import Products from  './Products'
import Like from  '../general/Like'
import Share from  '../general/Share'
import CommentsIcon from  '../general/CommentsIcon'
import Comments from  './Comments'
import FeedNotifications from  './FeedNotifications'
import SuggestedFriends from  './SuggestedFriends'
import Stores from  './Stores'
import PostTypeProduct from  './PostTypeProduct'
import PostTypeProductVideo from  './PostTypeProductVideo'
import PostTypeFeedback from  './PostTypeFeedback'
import PostTypeFeedbackGallery from  './PostTypeFeedbackGallery'
import PostTypeProductOnly from './PostTypeProductOnly'
import PostTypeText from './PostTypeText'
import ShowMore from './ShowMore'

export default class Posts extends React.Component {
    constructor(props) {
        super (props);
       
    } 
    render() {
    return  <div className="posts">

                {/* <Stores mobile/> we will not show store suggestions here on mobile **/ }

                <PostTypeProduct/>
                {this.props.shopfeed && <PostTypeProduct/>}
                {this.props.shopfeed && <PostTypeProduct/>}
                {this.props.shopfeed && <PostTypeProduct/>}
                {this.props.shopfeed && <PostTypeProduct/>}
                {this.props.shopfeed && <PostTypeProduct/>}
 
                {/* {!this.props.shopfeed && <SuggestedFriends mobile/>} */}
                {!this.props.shopfeed && <Stores mobile/>}
                {!this.props.shopfeed && <PostTypeText/>}

                {!this.props.shopfeed && <PostTypeFeedback/>}

                {/* {!this.props.shopfeed && <PostTypeFeedbackGallery/>} */}

                {!this.props.shopfeed && <PostTypeProduct/>}

                {!this.props.shopfeed && <PostTypeFeedback/>}

                {/* {!this.props.shopfeed && <PostTypeFeedbackGallery/>} */}
                {!this.props.shopfeed && <PostTypeProductOnly/>}
                {!this.props.shopfeed && <ShowMore/>}
            <style jsx global>{postsStyles}</style>
        </div>
    }
};