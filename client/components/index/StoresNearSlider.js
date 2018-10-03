import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import StoreNear from './StoreNear';

import {ICON_USER_ARROW} from '../static/Icons';
import ItemsSectionStyles from '../../static/comp-styles/index/ItemsSection.scss';
import ProductSliderStyles from '../../static/comp-styles/index/ProductSlider.scss';

export default class StoresNearSlider extends React.Component {
  constructor(props) {
    super (props);
    this.state = {};
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
      dots: true,
      infinite: false,
      speed: 500,
      initialSlide: 0,
      swipeToSlide: true,
      arrows:false,
      slidesToShow: 4,
      slidesToScroll: 4,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
            dots: true,
            //centerMode: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            //centerMode: true,
            dots: false
          }
        }
      ]
    };

    return  <section className="ItemsSection ItemsSection--storesNear">
      <div className="ItemsSection-wrapper">
        <div className="ItemsSection-heading">
          <div className="ItemsSection-colTitle">
            <h3 className="ItemsSection-title">Popular Stores Near You</h3>
          </div>
          <div className="ItemsSection-colLink">
            <Link to="/"><a>
              <span>See All</span>
              <span className="linkArrow">
                {ICON_USER_ARROW}
              </span>
            </a></Link>
          </div>
        </div>
        <div className="ItemsSection-content">
          <div className="ProductSlider-arrow ProductSlider-arrow--prev" onClick={this.prevProduct.bind(this)}>{ICON_USER_ARROW}</div>
          <Slider {...settings} ref={ slider => this.slider = slider} className="ProductSlider">
            <StoreNear style={{ width: 290 }}/>
            <StoreNear style={{ width: 290 }}/>
            <StoreNear style={{ width: 290 }}/>
            <StoreNear style={{ width: 290 }}/>
            <StoreNear style={{ width: 290 }}/>
            <StoreNear style={{ width: 290 }}/>
            <StoreNear style={{ width: 290 }}/>
            <StoreNear style={{ width: 290 }}/>
            <StoreNear style={{ width: 290 }}/>
            <StoreNear style={{ width: 290 }}/>
            <section className="StoreNear StoreNear--link" style={{ width: 290 }}>
              <Link to="/"><a>
                <div className="viewAll">
                  <div className="viewAll-arrow">
                    {ICON_USER_ARROW}
                  </div>
                  <div className="viewAll-text">
                    <span>View All Stores Near</span>
                  </div>
                </div>
              </a></Link>
            </section>
          </Slider>
          <div className="ProductSlider-arrow ProductSlider-arrow--next" onClick={this.nextProduct.bind(this)}>{ICON_USER_ARROW}</div>
        </div>
      </div>
      <style jsx global>{ItemsSectionStyles}</style>
      <style jsx global>{ProductSliderStyles}</style>
    </section>
  }
};
