import React from "react";
import Link from 'next/link'
import userPreviewSmallStyles from '/static/comp-styles/feed/UserPreviewSmall.scss'
import Ratings from 'react-ratings-declarative';
import Follow from '../general/FollowButton';
import {ICON_HUMAN} from '../static/Icons'; 
export default class UserPreviewSmall extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className="feed-left__suggested-friend">
                <div className="suggested-friend__general">
                    <div className="suggested-friend__avatar">
                        <img src="../static/images/avatar.png" alt=""/>
                    </div>
                    
                    <div className="suggested-friend__info">
                        <p className="suggested-friend__name"><strong>Catherine Meiz</strong></p>
                        <Follow followed={this.props.followed}/>
                        <div className="suggested-friend__followers">
                            <Ratings
                                rating={3.5}
                                widgetRatedColors="#F7D620"
                                widgetEmptyColors="#ccc"
                                widgetDimensions="16px"
                                widgetSpacings="1px"
                                changeRating={this.changeRating}
                                typeOfWidget='Star'
                            >
                                <Ratings.Widget  widgetHoverColor="#F7D620"/>
                                <Ratings.Widget  widgetHoverColor="#F7D620"/>
                                <Ratings.Widget widgetHoverColor="#F7D620"/>
                                <Ratings.Widget widgetHoverColor="#F7D620" />
                                <Ratings.Widget widgetHoverColor="#F7D620"/>
                            </Ratings>
                            <span className="human-icon">{ICON_HUMAN}</span> 789 
                        </div>
                    </div>
                </div>
                <div className="suggested-friend__follow">
                    {/* Follow buttons declared 
                        in this document 
                        outside of class */}
                    <Follow followed={this.props.followed}/>
                </div>
            <style jsx global>{userPreviewSmallStyles}</style>
        </div>
    }
};