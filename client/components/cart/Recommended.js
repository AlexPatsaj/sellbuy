import React from "react";
import recommendedStyles from '../../static/comp-styles/cart/Recommended.scss'
import Slider from "react-slick";
import Link from 'next/link'

import {ICON_CHEVRON} from  '../static/Icons'; 


export default class Recommended extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            slidesToShow : 1
        }
    } 

    componentDidMount(){
        this.setState({
            slidesToShow: window && window.innerWidth > 460 ? 3 : 1
        });
    }

    next(){
        this.slider.slickNext(); 
    }

    prev(){
        this.slider.slickPrev(); 
    }


    render() { 
    let settings = {
        lazyLoad: 'progressive',
        nextSlidesToPreload: 3,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow : this.state.slidesToShow ,
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToScroll: this.state.slidesToShow,
        arrows:false
    };
    return <div className="recommended container">
                <div className="recommended-header">
                    <h3 className="recommended-h3">Recommended for You</h3>
                    <span className='recommended-arrows'>
                        <Link href="/"><a>View All</a></Link>
                    </span>
                </div>
                
                <div className='slider-wrapper'>
                <div className="arrow-left arrow"  onClick={this.prev.bind(this)}>{ICON_CHEVRON}</div>
                <Slider {...settings} ref={ slider => this.slider = slider}>
                    <div className="recommended-slide">
                        <Link href="/"><a>
                            <img src="../static/images/recommendation-1.jpg" alt=""/>
                            <h3>Cahemire Pullover</h3>
                            <span className="recommended-shipping">
                                Free shipping
                            </span>
                            <span className="recommended-price">
                                $125.00 <strike>$150.00</strike>
                            </span>
                        </a></Link>
                    </div>
                    <div className="recommended-slide">
                        <Link href="/"><a>
                            <img src="../static/images/recommendation-2.jpg" alt=""/>
                            <h3>Cool Glasses</h3>
                            <span className="recommended-shipping">
                                Free shipping
                            </span>
                            <span className="recommended-price">
                                $125.00 <strike>$150.00</strike>
                            </span>
                        </a></Link>
                    </div>
                    <div className="recommended-slide">
                        <Link href="/"><a>
                            <img src="../static/images/recommendation.jpg" alt=""/>
                            <h3>Modern Watch</h3>
                            <span className="recommended-shipping">
                                Free shipping
                            </span>
                            <span className="recommended-price">
                                $125.00 <strike>$150.00</strike>
                            </span>
                        </a></Link>
                    </div>
                    <div className="recommended-slide">
                        <Link href="/"><a>
                            <img src="../static/images/recommendation-1.jpg" alt=""/>
                            <h3>Cahemire Pullover</h3>
                            <span className="recommended-shipping">
                                Free shipping
                            </span>
                            <span className="recommended-price">
                                $125.00 <strike>$150.00</strike>
                            </span>
                        </a></Link>
                    </div>
                    <div className="recommended-slide">
                        <Link href="/"><a>
                            <img src="../static/images/recommendation-2.jpg" alt=""/>
                            <h3>Cool Glasses</h3>
                            <span className="recommended-shipping">
                                Free shipping
                            </span>
                            <span className="recommended-price">
                                $125.00 <strike>$150.00</strike>
                            </span>
                        </a></Link>
                    </div>
                    <div className="recommended-slide">
                        <Link href="/"><a>
                            <img src="../static/images/recommendation.jpg" alt=""/>
                            <h3>Modern Watch</h3>
                            <span className="recommended-shipping">
                                Free shipping
                            </span>
                            <span className="recommended-price">
                                $125.00 <strike>$150.00</strike>
                            </span>
                        </a></Link>
                    </div>
                </Slider>
                <div className="arrow-right arrow"  onClick={this.next.bind(this)}>{ICON_CHEVRON}</div>
            </div>{/* /SliderWrapper */}
            <style jsx global>{recommendedStyles}</style>
        </div>
    }
};