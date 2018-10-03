import React from "react";
import Link from 'next/link'
import Textarea from "react-textarea-autosize";
import commentsStyles from '/static/comp-styles/feed/Comments.scss'
import {} from '../static/Icons'; 
import Comment from  './Comment'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default class Comments extends React.Component {
    constructor(props) {
        super (props);
         
        this.state = { 
            showComments :false 
        };

    } 

    showHide(){
         this.setState({ showComments: !this.state.showComments }); 
    }
    
    render() {
    return  <div className="comments">
            <div className="comments-accordeon" onClick={ this.showHide.bind(this) }>
                {!this.state.showComments ? 'Show' : 'Hide'} all 12 comments
            </div>
            <PerfectScrollbar>
            { this.state.showComments || this.props.show ? <div className="comments-last">
                <Comment />
                <Comment />
                <Comment />
            </div> : null}
            </PerfectScrollbar>
            <div className="add-comment">
                <div className="user-avatar">
                    <img src="../static/images/mind.png" alt=""/>
                </div>
                <Textarea placeholder="Add a comment" name="comment"/>
            </div>

            <style jsx global>{commentsStyles}</style>
        </div>
    }
};