import React from "react";
import Link from 'next/link'
import commentStyles from '/static/comp-styles/feed/Comment.scss'
import Like from  '../general/Like'
import {ICON_ADD_IMAGE, ICON_TAG} from '../static/Icons'; 
import Textarea from "react-textarea-autosize";

export default class Comment extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            replyActive: false
        }; 
    }

    reply(){
        this.setState({replyActive:true}); 
    }
    
    render() {
    return  <div className="comment">
                <div className="comment-wrapper">
                    <div className="comment-avatar">
                        <img src="../static/images/mind.png" alt=""/>
                    </div>
                    <div className="comment-body">
                        <span className="comment-text">
                            <strong>Emma Abrahams: </strong> 
                            <span className="comment-message">
                                Love this Post! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis laudantium adipisci quaerat architecto totam, fuga laborum expedita dolor consectetur voluptate harum assumenda delectus sed maiores ducimus est eum blanditiis provident?
                            </span>
                        </span>
                        <div className="comment-likes">
                            <Like likes_number={18}/>
                            <span className="comment-reply" 
                                onClick={this.reply.bind(this)}
                                data-userid={this.props.userId}>
                                Reply
                            </span>
                        </div>
                      { this.state.replyActive &&   <div className="comment-reply__appended">
                            <div className="appended-reply__avatar">
                                <img src="../static/images/mind.png" alt=""/>
                            </div>
                            <div className="appended-reply__form">
                                {/* <div className="appended-reply__add">
                                    {ICON_TAG}
                                    {ICON_ADD_IMAGE}
                                </div> */}
                                
                                <Textarea placeholder="What would you say?"/>
                            </div>
                        </div>
                       }
                    </div>
                </div>
                <div className="date-time">
                    Now
                    {/* {this.props.date} */}
                </div>
            <style jsx global>{commentStyles}</style>
        </div>
    }
};