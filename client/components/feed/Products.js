import React from "react";
import Link from 'next/link'
import productsStyles from '/static/comp-styles/feed/Products.scss'
import {ICON_USER_ARROW} from '../static/Icons';
import Slider from "react-slick";
import ProductPostPreview from "./ProductPostPreview";
 
import Midddly from '../../models/Midddly'; 

export default class Products extends React.Component {
    constructor(props) {
        super (props);
        this.slider={}; 
        this.state= {
            'showProducts': false
        };

        this.products= []; //this should come on props   
    }

//  TODO This only makes sense with our dummy data it should come on params 
    componentDidMount(){
        this.products.push(Midddly.getProductById(1)); 
        this.products.push(Midddly.getProductById(2)); 
        this.products.push(Midddly.getProductById(3)); 
        this.products.push(Midddly.getProductById(4)); 
        this.products.push(Midddly.getProductById(6));  
        this.props.show ? this.setState({
            'showProducts': !this.state.showProducts
        }) : null;
    }
 
    nextProduct(){
        this.slider.slickNext(); 
    }

    prevProduct(){
        this.slider.slickPrev(); 
    }

    showHideProducts(){
        this.setState({
            'showProducts': !this.state.showProducts
        }); 
    }

    componentWillMount () {
        
    }

    render() {
    let settings = {
        lazyLoad: 'progressive',
        nextSlidesToPreload: 3,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        variableWidth: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        swipeToSlide: true, 
        arrows:false,
        responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 1,
                variableWidth: false,
              },
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  variableWidth: false,
                },
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                  variableWidth: false,
                },
              }
              ,
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  variableWidth: false,
                },
              }
          ]
    };

    return  <div className={"feed-post__products" + (this.state.showProducts ? ' display-block' : '')}>
                <div className="products-header">
                 
                    <div>   
                    Products (5)  
                      </div>
                      { this.state.showProducts && !this.props.show ? <div  className='feed-post__hideProducts' onClick={this.showHideProducts.bind(this)}>
                        Hide
                        </div> : null}
                    { this.state.showProducts &&  <div className="arrows">
                        <div className="slick-prev slick-arrow" onClick={this.prevProduct.bind(this)}>{ICON_USER_ARROW}</div>
                        <div className="slick-next slick-arrow" onClick={this.nextProduct.bind(this)}>{ICON_USER_ARROW}</div> 
                    </div> 
                    }
                </div>
                { !this.state.showProducts && <div  className='feed-post__showProducts' onClick={this.showHideProducts.bind(this)}>
                 Show
                </div> }
                
                { this.state.showProducts && 
                    <Slider {...settings} ref={ slider => this.slider = slider}>
                        {
                            this.products.map((product, idx)=>{
                                return  <ProductPostPreview key={"product-preview-"+idx} product={product}/>
                            })
                        } 
                    </Slider>
                }
            <style jsx global>{productsStyles}</style>
        </div>
    }
};