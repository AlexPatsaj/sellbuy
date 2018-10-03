import React from "react"
import Link from 'next/link'
import ProductsSliderStyles from '../../static/comp-styles/index/ProductsSlider.scss'
import {ICON_USER_ARROW} from '../static/Icons'
import Slider from "react-slick"
import Midddly from '../../models/Midddly' 
import Product from  './Product'

export default class ProductsSlider extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            'products': []
        }
        this.slider={};
    }

    componentDidMount(){
        this.setState({'products':Midddly.getProducts()});         
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
        slidesToShow: 7,
        variableWidth: false,
        autoplay: false,
        slidesToScroll: 1,
        swipeToSlide: true, 
        arrows:false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            }
        ]
    }; 
    console.log("this.state.products", this.state.products)
    return  <div className="products-slider slider-block">
                <div className="-prev -arrow" onClick={this.prevProduct.bind(this)}>{ICON_USER_ARROW}</div>
                <Slider {...settings} ref={ slider => this.slider = slider}>
                    {
                        this.state.products.map((product,idx) =>{
                            return <Product product={product} key={"product"+idx} />
                        })
                    }
                </Slider>
                <div className="-next -arrow" onClick={this.nextProduct.bind(this)}>{ICON_USER_ARROW}</div>

            <style jsx global>{ProductsSliderStyles}</style>
        </div>
    }
};