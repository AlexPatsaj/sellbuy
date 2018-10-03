import React from 'react';
import Link from 'next/link'
import Ratings from 'react-ratings-declarative';
import shopInfoStyles from '../../static/comp-styles/shop/ShopInfo.scss'
import Follow from '../general/FollowButton';
import PostStyle from '../../static/comp-styles/feed/Posts.scss'
import {ICON_HUMAN,
        ICON_SOCIAL_FACEBOOK,
        ICON_SOCIAL_INSTAGRAM,
        ICON_SOCIAL_LINKEDIN,
        ICON_SOCIAL_PINTEREST,
        ICON_SOCIAL_TWITTER,
        ICON_SOCIAL_LINK} from '../static/Icons'; 


export default class ShopInfo extends React.Component {
    constructor(props) {
        super (props);
    } 
    
    render() {
    	return <div className="shop-info__wrapper container">
                <div className="shop-info__avatar">
                    <img src="../../static/images/shop-logo.jpg" alt=""/>
                </div>
                <div className="shop-info__info">
                    <div className="info-wrapper">
                        <div className="shop-info__name">
                            <h2 className="shop-info__subheader">
                                Madewell
                            </h2>
                            <span className="feed-left__store-media-parameters">
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
                                <span className="followers">
                                    {ICON_HUMAN}
                                    8.6K
                                </span>
                                
                            </span>
                            <div className="shop-followers">
                                <div className="shop-follower-avatar avatar and-more">
                                    <img src="../static/images/avatar.png" alt=""/>
                                </div>
                                <div className="shop-follower-avatar avatar">
                                    <img src="../static/images/avatar.png" alt=""/>
                                </div>
                                <div className="comments-description">
                                    Julia and 5 others follow this store
                                </div>
                            </div>
                            <div className="follow-friends"></div>

                            <div className='shop-tags post-tags'>
                                <Link href='#!'><a className='post-tag'>#zara</a></Link>
                                <Link href='#!'><a className='post-tag'>#mystyle</a></Link>
                                <Link href='#!'><a className='post-tag'>#mylifemyway</a></Link> 
                            </div>
                        </div>
                        {/* <div className="__tags">
                            <Link href="/"><a>#jeans</a></Link> <Link href="/"><a>#pants</a></Link> <Link href="/"><a>#shorts</a></Link> <Link href="/"><a>#cotton</a></Link>
                        </div> */}
                        <div className="shop-info__buttons">
                            <div className="buttons-wrapper">
                                <Follow followed/>
                                
                                <div className="btn outline shop__message">Message</div>
                            </div>
                        </div>
                    </div>
                    <div className="shop-info__connect">
                        <p className='shop-info__connectTitle'>Social</p>
                        <div className="shop-info__share">
                            <a>{ICON_SOCIAL_FACEBOOK}</a>
                            <a>{ICON_SOCIAL_INSTAGRAM}</a>
                            <a>{ICON_SOCIAL_LINKEDIN}</a>
                            <a>{ICON_SOCIAL_PINTEREST}</a>
                            <a>{ICON_SOCIAL_TWITTER}</a>
                        </div> 
                        
                    </div>
                </div>
            <style jsx global>{shopInfoStyles}</style>
            <style jsx global>{PostStyle}</style>
        </div>;
    }
}