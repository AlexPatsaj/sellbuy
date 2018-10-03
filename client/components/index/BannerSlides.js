import React from "react";
import Link from 'next/link'
import BannerSlidesStyles from '../../static/comp-styles/index/BannerSlides.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import HeaderBannerStatic from '../header/HeaderBannerStatic'
import Slider from "react-slick"

export default class BannerSlides extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
           
        }
        /* this.slider={}; */
    }

    /* nextProduct(){
        this.slider.slickNext(); 
    }

    prevProduct(){
         this.slider.slickPrev(); 
    } */

    render() {
        let settings = {
            lazyLoad: 'progressive',
            nextSlidesToPreload: 3,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            variableWidth: false,
            autoplay: false,
            slidesToScroll: 1,
            swipeToSlide: true, 
            arrows:false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                    },
                }
            ]
        }; 
    return  <div className="banner-slides">
                
                <div className="slider-block">
                    {/* <div className="-prev -arrow" onClick={this.prevProduct.bind(this)}>{ICON_USER_ARROW}</div> */}
                    <Slider {...settings} ref={ slider => this.slider = slider}>
                        <HeaderBannerStatic /><HeaderBannerStatic /><HeaderBannerStatic /><HeaderBannerStatic /><HeaderBannerStatic /><HeaderBannerStatic /><HeaderBannerStatic />
                    </Slider>
                    {/* <div className="-next -arrow" onClick={this.nextProduct.bind(this)}>{ICON_USER_ARROW}</div> */}
                </div>
            <style jsx global>{BannerSlidesStyles}</style>
        </div>
    }
};