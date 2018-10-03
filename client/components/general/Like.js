import React from "react";
import Link from 'next/link'
import likeStyles from '../../static/comp-styles/general/Like.scss'
import {ICON_LIKES_ACTIVE, ICON_LIKES_EMPTY} from '../static/Icons';

export default class Share extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            liked: props.isLiked ? props.isLiked : false,
        }
    } 

    like(){
        if(typeof(this.props.callback) != undefined){
            this.props.callback(); 
        }

        this.setState({
            'liked': !this.state.liked 
        }); 
    }

    render() {
    return <div className={"like-widget" + (this.props.likes_number ? "" : " empty")} 
            title={this.state.liked ? "You liked it" : null}
            onClick={this.like.bind(this)}
            >
                {this.state.liked ? ICON_LIKES_ACTIVE : ICON_LIKES_EMPTY}
                <div className="-count">{this.props.likes_number ? this.props.likes_number : null}</div>
            <style jsx global>{likeStyles}</style>
        </div>
    }
};