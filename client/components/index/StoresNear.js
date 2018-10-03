import React from "react";
import Link from 'next/link'
import StoresNearStyles from '../../static/comp-styles/index/StoresNear.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Store from './Store'
import Slider from "react-slick"

export default class StoresNear extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
           
        }
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
            speed: 1000,
            slidesToShow: 4,
            variableWidth: true,
            autoplay: false,
            slidesToScroll: 1,
            swipeToSlide: true, 
            arrows:false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        // slidesToScroll: 1,
                        // variableWidth: false,
                        // arrows:false,
                        // dots: true,
                    },
                }
            ]
        }; 
    return  <div className="stores-near">
                <h2 className="any-block__header">
                    <span>Popular Stores Near You</span>
                    <span class="view-all"><a href="/">View All</a></span>
                </h2>
                <div className="slider-block">
                    <div className="-prev -arrow" onClick={this.prevProduct.bind(this)}>{ICON_USER_ARROW}</div>
                    <Slider {...settings} ref={ slider => this.slider = slider}>
                        <Store/><Store/><Store/><Store/><Store/><Store/><Store/><Store/><Store/><Store/><Store/><Store/><Store/>
                    </Slider>
                    <div className="-next -arrow" onClick={this.nextProduct.bind(this)}>{ICON_USER_ARROW}</div>
                </div>
            <style jsx global>{StoresNearStyles}</style>
        </div>
    }
};