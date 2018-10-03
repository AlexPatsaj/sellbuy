import React from "react";
import Link from 'next/link'
import socialActivityStyles from '../../static/comp-styles/product-fashion/SocialActivity.scss'
import {ICON_ADD_IMAGE} from '../static/Icons'; 

export default class SocialActivity extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className="product-page__social-activity ">
                <div className="social-activity__event commented">
                    <div className="avatar">
                        <img src="../static/images/pic-1.png" alt=""/>
                    </div>
                    <div className="avatar">
                        <img src="../static/images/pic-1.png" alt=""/>
                    </div>
                    <div>2 of your friends commented on this item</div>
                </div>
                <div className="social-activity__reply">
                    <div className="avatar">
                        <img src="../static/images/pic-1.png" alt=""/>
                    </div>
                    <span>Share feedback, ask a question or give a highfive</span>
                    <div className="reply-actions">
                        {ICON_ADD_IMAGE}
                        <span className="reply-post">Post</span>
                    </div>
                </div>
            <style jsx global>{socialActivityStyles}</style>
        </div>
    }
};