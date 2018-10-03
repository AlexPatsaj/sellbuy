import React from "react";
import Link from 'next/link'
import feedHeaderStyles from '/static/comp-styles/feed/FeedHeader.scss'
import {} from '../static/Icons'; 

export default class FeedHeader extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
    render() {
    return  <div className="feed-header container">
                <h1 className="any-block__header">
                    Feed
                </h1>
                <span className="feed-header__menu">
                    <Link href="/feed/global"><a>Global</a></Link>
                    <Link href="/feed/local"><a className="active">Local</a></Link>
                    <Link href="/feed/following"><a>Following</a></Link>
                </span>
            
            <style jsx global>{feedHeaderStyles}</style>
        </div>
    }
};