import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import {ICON_USER_ARROW} from '../static/Icons';
import Like from  '../general/Like';
import ProductSliderStyles from '../../static/comp-styles/index/ProductSlider.scss';

export default class ProductSlider extends React.Component {
  constructor(props) {
    super(props);

    this.slider={};
  }

  nextProduct(){
    this.slider.slickNext();
  }

  prevProduct(){
    this.slider.slickPrev();
  }

  render() {
    var settings = {
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

    return <section className="ProductSlider">
    <div className="ProductSlider-arrow ProductSlider-arrow--prev" onClick={this.prevProduct.bind(this)}>{ICON_USER_ARROW}</div>
    <Slider {...settings} ref={ slider => this.slider = slider} className="ProductSlider-list">
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/laptop.jpg" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
            <div className="ProductSlider-row">
              <div className="ProductSlider-price">
                <span>BD </span><span>520.99</span>
              </div>
              <div className="ProductSlider-widgets">
                <Like likes_number={0}/>
              </div>
            </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                DELL XPS 15 2-in-1 Laptop
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Dell electronics and accessories
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/electronics-main.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
            <div className="ProductSlider-row">
              <div className="ProductSlider-price">
                <span className="ProductSlider-pricePrev">
                  <span>BD </span><span>520.99</span>
                </span>
                <span>BD </span><span>520.99</span>
              </div>
              <div className="ProductSlider-widgets">
                <Like likes_number={0}/>
              </div>
            </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Smart Watch XM9
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                iGear
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/post-1.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
          <div className="ProductSlider-row">
            <div className="ProductSlider-price">
              <span className="ProductSlider-pricePrev">
                <span>BD </span><span>309.99</span>
              </span>
              <span>BD </span><span>290.99</span>
            </div>
            <div className="ProductSlider-widgets">
              <Like likes_number={0}/>
            </div>
          </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Leather city bag with knotted details
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Women Apparel Outlet
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/most-popular-2.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
          <div className="ProductSlider-row">
            <div className="ProductSlider-price">
              <span className="ProductSlider-pricePrev">
                <span>BD </span><span>140</span>
              </span>
              <span>BD </span><span>129.99</span>
            </div>
            <div className="ProductSlider-widgets">
              <Like likes_number={0}/>
            </div>
          </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Shirt
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Designer Apparel
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/laptop.jpg" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
            <div className="ProductSlider-row">
              <div className="ProductSlider-price">
                <span>BD </span><span>520.99</span>
              </div>
              <div className="ProductSlider-widgets">
                <Like likes_number={0}/>
              </div>
            </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                DELL XPS 15 2-in-1 Laptop
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Dell electronics and accessories
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/electronics-main.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
            <div className="ProductSlider-row">
              <div className="ProductSlider-price">
                <span className="ProductSlider-pricePrev">
                  <span>BD </span><span>520.99</span>
                </span>
                <span>BD </span><span>520.99</span>
              </div>
              <div className="ProductSlider-widgets">
                <Like likes_number={0}/>
              </div>
            </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Smart Watch XM9
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                iGear
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/post-1.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
          <div className="ProductSlider-row">
            <div className="ProductSlider-price">
              <span className="ProductSlider-pricePrev">
                <span>BD </span><span>309.99</span>
              </span>
              <span>BD </span><span>290.99</span>
            </div>
            <div className="ProductSlider-widgets">
              <Like likes_number={0}/>
            </div>
          </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Red Sweater
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Women Apparel Outlet
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/most-popular-2.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
          <div className="ProductSlider-row">
            <div className="ProductSlider-price">
              <span className="ProductSlider-pricePrev">
                <span>BD </span><span>140</span>
              </span>
              <span>BD </span><span>129.99</span>
            </div>
            <div className="ProductSlider-widgets">
              <Like likes_number={0}/>
            </div>
          </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Shirt
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Designer Apparel
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/laptop.jpg" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
            <div className="ProductSlider-row">
              <div className="ProductSlider-price">
                <span>BD </span><span>520.99</span>
              </div>
              <div className="ProductSlider-widgets">
                <Like likes_number={0}/>
              </div>
            </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                DELL XPS 15 2-in-1 Laptop
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Dell electronics and accessories
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/electronics-main.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
            <div className="ProductSlider-row">
              <div className="ProductSlider-price">
                <span className="ProductSlider-pricePrev">
                  <span>BD </span><span>520.99</span>
                </span>
                <span>BD </span><span>520.99</span>
              </div>
              <div className="ProductSlider-widgets">
                <Like likes_number={0}/>
              </div>
            </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Smart Watch XM9
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                iGear
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/post-1.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
          <div className="ProductSlider-row">
            <div className="ProductSlider-price">
              <span className="ProductSlider-pricePrev">
                <span>BD </span><span>309.99</span>
              </span>
              <span>BD </span><span>290.99</span>
            </div>
            <div className="ProductSlider-widgets">
              <Like likes_number={0}/>
            </div>
          </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Red Sweater
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Women Apparel Outlet
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/most-popular-2.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
          <div className="ProductSlider-row">
            <div className="ProductSlider-price">
              <span className="ProductSlider-pricePrev">
                <span>BD </span><span>140</span>
              </span>
              <span>BD </span><span>129.99</span>
            </div>
            <div className="ProductSlider-widgets">
              <Like likes_number={0}/>
            </div>
          </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Shirt
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Designer Apparel
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/electronics-main.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
            <div className="ProductSlider-row">
              <div className="ProductSlider-price">
                <span className="ProductSlider-pricePrev">
                  <span>BD </span><span>520.99</span>
                </span>
                <span>BD </span><span>520.99</span>
              </div>
              <div className="ProductSlider-widgets">
                <Like likes_number={0}/>
              </div>
            </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Smart Watch XM9
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                iGear
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide" style={{ width: 290 }}>
        <div className="ProductSlider-item">
          <Link to="/"><a>
            <div className="ProductSlider-image">
              <img src="http://138.68.255.94:3001/square/images/most-popular-2.png" />
            </div>
          </a></Link>
          <div className="ProductSlider-content">
          <div className="ProductSlider-row">
            <div className="ProductSlider-price">
              <span className="ProductSlider-pricePrev">
                <span>BD </span><span>140</span>
              </span>
              <span>BD </span><span>129.99</span>
            </div>
            <div className="ProductSlider-widgets">
              <Like likes_number={0}/>
            </div>
          </div>
            <h4 className="ProductSlider-title">
              <Link to="/"><a>
                Shirt
              </a></Link>
            </h4>
            <p className="ProductSlider-shop">
              <span>by </span>
              <Link to="/"><a>
                Designer Apparel
              </a></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="ProductSlider-slide ProductSlider-slide--link" style={{ width: 290 }}>
        <Link to="/"><a>
          <div className="viewAll">
            <div className="viewAll-arrow">
              {ICON_USER_ARROW}
            </div>
            <div className="viewAll-text">
              <span>Shop All {this.props.title ? this.props.title : 'Hot Deals'}</span>
            </div>
          </div>
        </a></Link>
      </section>
    </Slider>
    <div className="ProductSlider-arrow ProductSlider-arrow--next" onClick={this.nextProduct.bind(this)}>{ICON_USER_ARROW}</div>
    <style jsx global>{ProductSliderStyles}</style>
    </section>
  }
}
