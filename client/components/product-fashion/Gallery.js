import React from "react";
import Link from 'next/link'
import galleryStyles from '../../static/comp-styles/product-fashion/Gallery.scss'
import {ICON_ZOOM, ICON_CHEVRON} from '../static/Icons'; 
import Slider from "react-slick";
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import ImageModal from "./ImageModal";

/**
    * TODO: preload all the fullsize images, else it get's stuck on the production version and it's super horrible to use. 
*/ 
export default class Gallery extends React.Component {
    constructor(props) {
        super (props);
        this.slider={}; 
        this.state = {
            currIdx:0 // the index of the props.gallery array, this array has format {thumb: preview img path , full: fullimg paht }
        };
    } 

    openModal = (e)=> {
        e.preventDefault();
        ModalManager.open(<ImageModal product={this.props.product} onRequestClose={() => true}/>);
    }

    nextProduct(){
        this.setCurrentImg(  ++this.state.currIdx % this.props.product.gallery.length ); // ex explanation https://www.cprogramming.com/tips/tip/increment-and-decrement-counters-with-rollover
    }

    prevProduct(){
        let currIdx = --this.state.currIdx > 0 ? this.state.currIdx : this.props.product.gallery.length-1; //revert to last picture when reaching end 
        this.setCurrentImg(currIdx);  
    }

    nextGroup(){
        this.slider.slickNext(); 
    }

    prevGroup(){
        this.slider.slickPrev(); 
    }

    setCurrentImg(idx){
        console.log("cURR IMG " + idx); 

        this.setState({
            'currIdx': idx
        }); 
    }

    render() {
        if(!this.props.product.gallery){
            return <React.Fragment> </React.Fragment>; 
        }

        let settings = {
            lazyLoad: 'progressive',
            nextSlidesToPreload: 3,
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            // variableWidth: true,
            autoplay: false,
            adaptiveHeight: true,
            autoplaySpeed: 3000,
            slidesToScroll: 3,
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
                        slidesToScroll: 2,
                    },
                    },
                    {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false,
                        arrows:false,
                        dots: true,
                    },
                    }
                ]
        }; 
    return <div className={"product-page__gallery " + (this.props.mobile ? 'mobile' : '')}>
                
                <div className="product-page__preview">
                    <div className="arrow-left arrow"  onClick={this.prevProduct.bind(this)}>{ICON_CHEVRON}</div>
                    <div className="preview-wrapper">
                        <div className="icon-zoom"  onClick={this.openModal}>{ICON_ZOOM}</div>
                        <img src="../../static/images/dress1.png" alt=""/>
                    </div> 
                    <div className="arrow-right arrow" onClick={this.nextProduct.bind(this)}>{ICON_CHEVRON}</div>
                </div>

                <div className="slider">
                    <div className="arrow-left arrow"  onClick={this.prevGroup.bind(this)}>{ICON_CHEVRON}</div>
                    <Slider {...settings} ref={ slider => this.slider = slider}>
                        {
                            this.props.product.gallery.map((item,idx) => {
                                console.log("gallery img IDX "+ idx); 
                                return  <div className="gallery-image" key={"prodimg"+idx} onClick={() => { this.setCurrentImg(idx) }}>
                                        <img src={item.thumb} alt=""/>
                                </div>;
                            })
                        } 
                    </Slider>
                    <div className="arrow-right arrow" onClick={this.nextGroup.bind(this)}>{ICON_CHEVRON}</div>
                </div>
                
            <style jsx global>{galleryStyles}</style>
        </div> ; 
    }
};