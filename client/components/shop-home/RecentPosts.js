import React from "react"
import recentPostsStyles from '../../static/comp-styles/shop-home/RecentPosts.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Link from 'next/link'
import Slider from "react-slick";
import RecentPost from './RecentPost'

export default class RecentPosts extends React.Component {
    constructor(props) {
        super (props);
        this.slider={}; 
    } 
    // nextProduct(){
    //     this.slider.slickNext(); 
    // }

    // prevProduct(){
    //     this.slider.slickPrev(); 
    // }
    render() {
    let settings = {
        lazyLoad: 'progressive',
        nextSlidesToPreload: 3,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        // variableWidth: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        swipeToSlide: true, 
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
                    slidesToShow: 1,
                    variableWidth: false,
                },
                }
            ]
        };
    return <div className="recent-posts f6f6f7">
                <div className="container">
                    <div className="view-all__header">
                        <h2>Recent Posts</h2>
                        <span className="_view-all"><Link href="/"><a>View All</a></Link></span> 
                    </div>
                    <Slider {...settings} ref={ slider => this.slider = slider}>
                        <RecentPost/>
                        <RecentPost/>
                        <RecentPost/>
                        <RecentPost/>
                        <RecentPost/>
                        <RecentPost/>
                    </Slider>
                </div>
            <style jsx global>{recentPostsStyles}</style>
        </div>
    }
};