import React from "react";
import Link from 'next/link'
import PostsYouMayLikeStyles from '../../static/comp-styles/feed/PostsYouMayLike.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Slider from "react-slick";

// import ProductSlide from "./Product-Slide"

export default class PostsYouMayLike extends React.Component {
    constructor(props) {
        super (props);
        this.slider={}; 
    } 

    nextProduct(){
        this.slider.slickNext(); 
    }

    prevProduct(){
        this.slider.slickPrev(); 
    }

    render() {
    let settings = {
        lazyLoad: 'progressive',
        nextSlidesToPreload: 3,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                slidesToShow: 3,
                variableWidth: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                    arrows:false,
                    dots: true
                },
            }
        ]
    };
    return  <div className="may-like">
                <div className="may-like__header">
                    <h3>POSTS YOU MAY ALSO LIKE</h3>
                    <span><Link><a href="/">View All</a></Link></span>
                </div>
                <div className="slider-block">
                    <div className="-prev -arrow" onClick={this.prevProduct.bind(this)}>{ICON_USER_ARROW}</div>
                    <Slider {...settings} ref={ slider => this.slider = slider}>
                        <Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link><Link href=""><a><img src="../../static/images/recommendation-1.jpg" alt=""/></a></Link>
                    </Slider>
                    <div className="-next -arrow" onClick={this.nextProduct.bind(this)}>{ICON_USER_ARROW}</div>
                </div>
            <style jsx global>{PostsYouMayLikeStyles}</style>
        </div>
    }
};