import React from "react"
import Link from 'next/link'
import Ratings from 'react-ratings-declarative'
import storePreviewSmallStyles from '/static/comp-styles/feed/StorePreviewSmall.scss'
import {ICON_HUMAN} from '../static/Icons' 
import Follow from '../general/FollowButton'

export default class StorePreviewSmall extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className="feed-left__store">
             
                {this.props.showAvatar && <div className="feed-left__avatar">
                    <img src="../static/images/avatar.png" alt=""/>
                </div>}
                <div className="feed-left__store-info">
                    <div className="feed-left__store-name">
                        <div className="feed-left__avatar-mobile">
                            <a><img src="../static/images/avatar.png" alt=""/></a>
                        </div>
                        <div className="store-name__wrapper">
                            <Link href='/shop'><a><span><strong>Watsons Wedding Apparel</strong></span></a></Link>
                            <div className="feed-left__store-media-parameters">
                                <Ratings
                                    rating={3.5}
                                    widgetRatedColors="#F7D620"
                                    widgetEmptyColors="#ccc"
                                    widgetHoverColors="#F7D620"
                                    widgetDimensions="12px"
                                    widgetSpacings="1px"
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
                            <Follow/>
                        </div>
                    </div>
                    
                    {/* <div className="feed-left__store-items">
                        <div className="feed-left__store-item-picture">
                            <img src="../static/images/store-item-feed.png" alt=""/>
                        </div>
                        <div className="feed-left__store-item-picture">
                            <img src="../static/images/store-item-feed.png" alt=""/>
                        </div>
                        <div className="feed-left__store-item-picture">
                            <div className="feed-more-items">
                                +20 items
                            </div>
                            <img src="../static/images/store-item-feed.png" alt=""/>
                        </div>
                    </div> */}
                    {/* <div className="btn outline">Visit store</div> */}
                </div>
                
            <style jsx global>{storePreviewSmallStyles}</style>
        </div>
    }
};