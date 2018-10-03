import React from "react"
import mostPopularStyles from '../../static/comp-styles/shop-home/MostPopular.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Link from 'next/link'
import Like from  '../general/Like'

export default class RecentPost extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return <div className="recent-post">
                <div className="recent-post_img">
                    <img src="../static/images/post-1.png" alt=""/>
                </div>
                <div className="recent-post__info">
                    <div className="flex-vstart-jcsb">
                        <div className="recent-post__avatar avatar">
                            <img src="../static/images/avatar.png" alt=""/>
                        </div>
                        <div className="recent-post__header">
                            <h3>Woman Autumn Summer 2018 Campaign by Steven Meisel</h3>
                            <div className="subtitle">Woman Autumn Summer 2018 Campaign by Steven Meisel</div>
                        </div>
                    </div>
                    <div className="recent-post__media-activity">
                        <div className="commenters">
                            <div className="recent-post__commenter-avatar avatar and-more">
                                <img src="../static/images/avatar.png" alt=""/>
                            </div>
                            <div className="recent-post__commenter-avatar avatar">
                                <img src="../static/images/avatar.png" alt=""/>
                            </div>
                            <div className="recent-post__commenter-avatar avatar">
                                <img src="../static/images/avatar.png" alt=""/>
                            </div>
                            <div className="comments-description">
                                have commented on this post.
                            </div>
                        </div>
                        <Like likes_number={0} liked={false}/>
                    </div>
                </div>
            <style jsx global>{mostPopularStyles}</style>
        </div>
    }
};