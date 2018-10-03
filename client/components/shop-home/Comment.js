import React from "react"
import commentStyles from '../../static/comp-styles/shop-home/Comment.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Link from 'next/link'
import Deal from './Deal'

export default class Comment extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return <div className="most-popular__comment">
                <div className="most-popular__avatar avatar">
                    <img src="../static/images/avatar.png" alt=""/>
                </div>
                <div className="most-popular__comment-info">
                    <p className="name-action">
                        <strong>Zara Black</strong> left a comment
                    </p>
                    <p className="comment-content">
                        Bought this dress for my girlfriend’s birthday and she loved it!
                    </p>
                </div>
                <div className="date-time">5 min</div>

            <style jsx global>{commentStyles}</style>
        </div>
    }
};