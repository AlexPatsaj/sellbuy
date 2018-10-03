import React from "react";
import Link from 'next/link'
import alsoViewedStyles from '../../static/comp-styles/product/AlsoViewed.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Slider from "react-slick";
import ProductSlide from "./Product-Slide"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class AlsoViewed extends React.Component {
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
        // variableWidth: false,
        // adaptiveHeight: true,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                slidesToShow: 4,
                },
            },
            {
                breakpoint: 1080,
                settings: {
                slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
            },
                },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    arrows:false,
                    dots: true
                },
            }
        ]
    };
    return  <div className={"also-viewed "}>
                <span className="view-all"><Link><a href="/">View All</a></Link></span>
                <Tabs>
                    <TabList>
                        <Tab>People Also Viewed</Tab>
                        <Tab>Similiar Items</Tab>
                    </TabList>
                    
                    <TabPanel>
                        <div className="-prev -arrow" onClick={this.prevProduct.bind(this)}>{ICON_USER_ARROW}</div>
                        <Slider {...settings} ref={ slider => this.slider = slider}>
                            <ProductSlide discount/>
                            <ProductSlide/>
                            <ProductSlide/>
                            <ProductSlide/>
                            <ProductSlide/>
                            <ProductSlide discount/>
                            <ProductSlide/>
                            <ProductSlide discount/>
                            <ProductSlide/>
                            <ProductSlide/>
                        </Slider>
                        <div className="-next -arrow" onClick={this.nextProduct.bind(this)}>{ICON_USER_ARROW}</div>
                    </TabPanel>
                    <TabPanel>
                        Oooops, same content :)
                        <div className="-prev -arrow" onClick={this.prevProduct.bind(this)}>{ICON_USER_ARROW}</div>
                        <Slider {...settings} ref={ slider => this.slider = slider}>
                            <ProductSlide/>
                            <ProductSlide/>
                            <ProductSlide  discount/>
                            <ProductSlide/>
                            <ProductSlide/>
                            <ProductSlide/>
                            <ProductSlide/>
                            <ProductSlide discount/>
                            <ProductSlide/>
                            <ProductSlide discount/>
                        </Slider>
                        <div className="-next -arrow" onClick={this.nextProduct.bind(this)}>{ICON_USER_ARROW}</div>
                    </TabPanel>
                </Tabs>
            <style jsx global>{alsoViewedStyles}</style>
        </div>
    }
};