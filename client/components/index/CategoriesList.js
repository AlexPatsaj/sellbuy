import React from "react";
import Link from 'next/link'
import CategoriesListStyles from '../../static/comp-styles/index/CategoriesList.scss'
import {ICON_DROPDOWN_ARROW, ICON_USER_ARROW} from '../static/Icons';
import Slider from "react-slick"

export default class CategoriesList extends React.Component {
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
        slidesToShow: 6,
        variableWidth: true,
        autoplay: false,
        slidesToScroll: 3,
        swipeToSlide: true, 
        arrows:false,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                    arrows:false,
                },
            }
        ]
    }; 
    return  <div className="categories-list">
                <div className="active-category">
                    Electronics
                    {ICON_DROPDOWN_ARROW}
                </div>
                <ul className="subcategories">
                    <Slider {...settings} ref={ slider => this.slider = slider}>
                    <li className="subcategory">
                        <Link><a href="/">
                        Cell Phones & Accessories
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        TVs & Electronics
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Computers & Tablets
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Cell Phones & Accessories
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        TVs & Electronics
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Computers & Tablets
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Cell Phones & Accessories
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        TVs & Electronics
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Computers & Tablets
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Cell Phones & Accessories
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        TVs & Electronics
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Computers & Tablets
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Cell Phones & Accessories
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        TVs & Electronics
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Computers & Tablets
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        Cell Phones & Accessories
                        </a></Link>
                    </li>
                    <li className="subcategory">
                        <Link><a href="/">
                        TVs & Electronics
                        </a></Link>
                    </li>
                    </Slider>
                </ul>
                <div className="arrows">
                    <div className="arrow left" onClick={this.prevProduct.bind(this)}>
                        {ICON_USER_ARROW}
                    </div>
                    <div className="arrow right"  onClick={this.nextProduct.bind(this)}>
                        {ICON_USER_ARROW}
                    </div>
                </div>

            <style jsx global>{CategoriesListStyles}</style>
        </div>
    }
};