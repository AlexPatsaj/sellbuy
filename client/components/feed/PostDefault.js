import React from "react";
import Link from 'next/link'
import suggestedFriendsStyles from '../../static/comp-styles/feed/SuggestedFriends.scss'
import {ICON_MENU_DOTS, ICON_CHEVRON, ICON_CAMERA} from '../static/Icons'; 
import Slider from "react-slick";
import Products from  './Products'
import Like from  '../general/Like'
import Share from  '../general/Share'
import CommentsIcon from  '../general/CommentsIcon'
import Comments from  './Comments'

import moment from 'moment-timezone'; 
import Midddly from '../../models/Midddly'; 
import MidddlyUser from '../../models/MidddlyUser'; 

import SitePostPreview from './SitePostPreview'; 
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import PostPreviewModal from "./PostPreviewModal";
/*
*   Receives and displays a post object 
*/ 
export default class PostDefault extends React.Component {
    constructor(props) {
        super (props);
        this.slider={}; 
        this.user= {'timezone':'Asia/Bahrain'};
    } 

    componentDidMount(){
        this.user = MidddlyUser.getUser(); 
    }

    nextGroup(){
        this.slider.slickNext(); 
    }

    prevGroup(){
        this.slider.slickPrev(); 
    }

    delete(){
        Midddly.postDelete(this.props.post.id, (resp) =>{

            if(!resp.error  && typeof(this.props.deletepost !== 'undefined')) {
                this.props.deletepost(this.props.post);     
            }  else {
                alert(resp.error + "\n Find a pretty box for this? ");
            }
        });
    }

    /*
        * Remember to display this in user time 
    */ 
    getTime(){
        if(!this.user){
            moment.tz(this.props.post.created_at,Midddly.getMidddlyTimezone()); 
            return; 
        }

        let midddlyTime = moment.tz(this.props.post.created_at,Midddly.getMidddlyTimezone());
        let userTime =  midddlyTime.clone().tz(this.user.timezone); 
        return userTime.from(moment());
    }

    openModal = (e)=> {
        e.preventDefault();
        ModalManager.open(<PostPreviewModal onRequestClose={() => true}/>);
    }

    render() {
     let settings = {
        lazyLoad: 'progressive',
        nextSlidesToPreload: 3,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        // variableWidth: true,
        autoplay: false,
        slidesToScroll: 1,
        swipeToSlide: true, 
        adaptiveHeight: true,
        arrows:false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows:false,
                    dots: true,
                },
            }
        ]
    }; 
    
    return  <div className="post-type products">
                <div className="post-header">
                    <div className="post-general">
                        <div className="post-author" onClick={this.openModal}>
                            <div className="post-avatar">
                                <img src={this.props.post.user_avatar ? this.props.post.user_avatar : "../static/images/post-avatar.png"} alt=""/>
                            </div>
                            <div className="post-author__name">
                                <strong>{this.props.post.user_name}</strong>
                                <p className="date-time">{this.getTime()}</p>
                            </div>
                        </div>
                        <div className="post-menu">
                            {ICON_MENU_DOTS}
                            <div className="post-dropdown">
                                <span className="dropdown-option">
                                    Edit
                                </span>
                                <span className="dropdown-option" onClick={this.delete.bind(this)}>
                                    Delete
                                </span>
                                <span className="dropdown-option">
                                    Report inappropriate content
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>

               

                <div className="post-body">
                    <div className="feed-slider__wrapper">
                        <div className="feed-gallery mobile-only">
                            {ICON_CAMERA} 12
                        </div>
                      
                         
                        {this.props.post.imgs.length > 1 &&   <React.Fragment><div className="arrow-left arrow" onClick={this.prevGroup.bind(this)}>{ICON_CHEVRON}</div>
                        <Slider {...settings} ref={ slider => this.slider = slider}>

                            {this.props.post.imgs && this.props.post.imgs.map((img,idx)=>{
                                return    <div className="post-image" key={"postIMG"+this.props.post.id+"_"+idx}>
                                        <img src={img} alt={"post image"+idx}/>
                                    </div>

                            })} 
                            </Slider>
                         <div className="arrow-right arrow" onClick={this.nextGroup.bind(this)}>{ICON_CHEVRON}</div>
                         </React.Fragment>
                        }

                        {this.props.post.imgs.length == 1 && <img src={ this.props.post.imgs[0]} alt={"post image"}/>}
                    </div>
                    <div className="post-description">
                        { 
                            this.props.post.title && <div className="post-title">
                            {this.props.post.title}
                            </div>
                        } 

                        { 
                            this.props.post.description  && <div className="post-text">
                               { this.props.post.description }
                            </div>
                        }

                        {this.props.post.tags.length > 0 && 
                            <div className="post-tags">
                                {
                                    this.props.post.tags.map((tag, idx) => {
                                        return <Link  href={"/search/tag/"+tag}><a className="post-tag">{tag}</a></Link>  
                                    })                                
                                }
                            </div>
                        }
                    </div>
                    {this.props.post.products && this.props.post.products.length > 0 &&  <Products /> } 
                    {this.props.post.meta && <SitePostPreview meta={this.props.post.meta}/> }

                    <div className="social-icons">
                        <Like likes_number={22}/>
                        <CommentsIcon comments_number={7}/>
                        <Share shares_number={12} horisontal={true}/>
                    </div>
                    <Comments/>
                </div>
                
            <style jsx global>{suggestedFriendsStyles}</style>
        </div>
    }
};