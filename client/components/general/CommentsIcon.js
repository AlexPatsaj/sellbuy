import React from "react";
import Link from 'next/link'
import commentsIconStyles from '/static/comp-styles/general/CommentsIcon.scss'
import {ICON_COMMENTS} from '../static/Icons'



export default class CommentsIcon extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
    render() {
    return  <div className="comments-icon">
                {ICON_COMMENTS}
                <div className="-count">{this.props.comments_number}</div>
            <style jsx global>{commentsIconStyles}</style>
        </div>
    }
};