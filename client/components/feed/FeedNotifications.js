import React from "react";
import Link from 'next/link'
import feedNotificationsStyles from '/static/comp-styles/feed/FeedNotifications.scss'
import {} from '../static/Icons'; 

export default class FeedNotifications extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
    render() { 
    return  <div className={ 'feed-notifications '  + (this.props.left ? 'left' : "") + (this.props.mobile ? 'mobile' : '')}>
 
                <div className="feed-notification">
                    <div className="date-time">1h</div>
                    <div className="feed-notification__avatar">
                        <img src="../static/images/post-avatar.png" alt=""/>
                    </div>
                    <div className="feed-notification__event">
                        <div className="feed-notification__body">
                            <p className="feed-notification__info"><strong>Mango</strong> liked 4 posts</p>
                            <p className="feed-notification__text">Daily Makeup Routine</p>
                        </div>
                    </div>
                </div>
                 
                <div className="feed-notification">
                    <div className="date-time">1h</div>
                    <div className="feed-notification__avatar">
                        <img src="../static/images/post-avatar.png" alt=""/>
                    </div>
                    <div className="feed-notification__event">
                        <div className="feed-notification__body">
                            <p className="feed-notification__info"><strong>Mango</strong> followed&nbsp;
                                <span className="feed-notification__user">
                                    <Link href="/user/dailymakeuproutine"><a className='post-mention'>@jenny </a></Link>
                                    <Link href="/user/dailymakeuproutine"><a className='post-mention'>@hose </a></Link>
                                    <Link href="/user/dailymakeuproutine"><a className='post-mention'>@marid </a></Link>
                                    <Link href="/user/dailymakeuproutine"><a className='post-mention'>@ksenia</a></Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feed-notification">
                    <div className="date-time">1h</div>
                    <div className="feed-notification__avatar">
                        <img src="../static/images/post-avatar.png" alt=""/>
                    </div>
                    <div className="feed-notification__event">
                        <div className="feed-notification__body">
                            <p className="feed-notification__info"><strong>Charlotte Tilbury</strong> commented on <span className="feed-notification__user"><Link href="/user/dailymakeuproutine"><a  className='post-mention'>@jennyhandmade</a></Link></span>'s post:
                                <span className="feed-notification__comment"> LOVE how you applied the new shades. Fantastic!</span>
                            </p>
                            <div className="feed-notification__picture">
                                <img src="../static/images/pic-1.png" alt=""/>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="feed-notification">
                    <div className="date-time">1h</div>
                    <div className="feed-notification__avatar">
                        <img src="../static/images/post-avatar.png" alt=""/>
                    </div>
                    <div className="feed-notification__event">
                        <div className="feed-notification__body">
                            <p className="feed-notification__info"><strong>Olivia</strong> followed <span className="feed-notification__user"><Link href="/user/dailymakeuproutine"><a className='post-mention'>@jennyhandmade</a></Link></span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="feed-notification">
                    <div className="date-time">1h</div>
                    <div className="feed-notification__avatar">
                        <img src="../static/images/post-avatar.png" alt=""/>
                    </div>
                    <div className="feed-notification__event">
                        <div className="feed-notification__body">
                            <p className="feed-notification__info"><strong>Charlotte Tilbury</strong> commented on <span className="feed-notification__user"><Link href="/user/dailymakeuproutine"><a className='post-mention'>@dailymakeuproutine</a></Link>’s</span>'s post:
                                <span className="feed-notification__comment"> LOVE how you applied the new shades. Fantastic!</span>
                            </p>
                            <div className="feed-notification__picture">
                                <img src="../static/images/pic-1.png" alt=""/>
                            </div>
                        </div> 
                    </div>
                </div>

            <style jsx global>{feedNotificationsStyles}</style>
        </div>
    }
};