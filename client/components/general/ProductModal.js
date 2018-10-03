import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import productModalStyles from '../../static/comp-styles/shop/ProductModal.scss'
import {ICON_CHEVRON, ICON_USER_ARROW} from '../static/Icons';
import Gallery from "../product/Gallery";
import Slider from "react-slick";

import GeneralInfo from './Modal-GeneralInfo';
import SellerBox from './Modal-Sellerbox';
import Comments from '../feed/Comments';
import Like from  '../general/Like'
import CommentsIcon from  '../general/CommentsIcon'
import Share from  '../general/Share'
import Save from  '../general/Save'

export default class ProductModal extends React.Component{
	constructor(props) {
    super (props);
        this.state = {
            currIdx:0
        }
    }

    componentDidMount() {
        document.body.classList.add('locked');
        document.querySelector('html').classList.add('locked');
    }

    componentWillUnmount() {
        document.body.classList.remove('locked');
        document.querySelector('html').classList.remove('locked');
    }

    appendClasses(modalnode) {
        modalnode.refs.content.className  = "modal-product-bodyClass"; 
        modalnode.refs.overlay.className = 'modal-product-overlayClass'; 
    }

    nextProduct = () =>{
        this.setCurrentImg(  ++this.state.currIdx % this.props.product.gallery.length ); // ex explanation https://www.cprogramming.com/tips/tip/increment-and-decrement-counters-with-rollover
    }

    prevProduct = () => {
        let currIdx = --this.state.currIdx > 0 ? this.state.currIdx : this.props.product.gallery.length-1; //revert to last picture when reaching end 
        this.setCurrentImg(currIdx);  
    }

    setCurrentImg = (idx) => {
        console.log("cURR IMG " + idx); 

        this.setState({
            'currIdx': idx
        }); 
    }

   	render(){
	  const { header, onRequestClose } = this.props;
	  if (this.props.text) {
		  const { text } = this.props;
      }
      console.log("this.props.product",this.props.product);
      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.Fall}
            ref={ (modal) => { this.appendClasses(modal) } }
			>
            <div className="arrow-getback arrow"  onClick={ModalManager.close}>{ICON_USER_ARROW} Back to Results</div>
            <div className="previous-product"><div className="circle">{ICON_USER_ARROW}</div></div>
            <div className="next-product"><div className="circle">{ICON_USER_ARROW}</div></div>
            <div className="modal-wrapper add-form">
                <div className="modal-body">
                    <div className="modal-close" onClick={ModalManager.close}>
                        ×
                    </div>
                    <div className="modal-form">
                        <div className="product-general">
                            <div className="product-page__preview">
                                <div className="arrow-left arrow"  onClick={this.prevProduct}>{ICON_CHEVRON}</div>
                                <div className="preview-wrapper">
                                    <div className="discount">40% <strong>OFF</strong></div>
                                    <img src={this.props.product.gallery[this.state.currIdx].full } alt=""/>
                                </div>
                                <div className="arrow-right arrow" onClick={this.nextProduct}>{ICON_CHEVRON}</div>
                            </div>
                            <div className="media-activity">
                                <div className="__block-activity" title="Likes">
                                    <Like likes_number={this.props.likes_number} liked={false}/>
                                </div>
                                <div className="__block-activity" title="Comments">
                                    <CommentsIcon comments_number={7}/>
                                </div>
                                <div className="__block-activity" title="Share">
                                    <Share shares_number={34} horisontal={true}/>
                                </div>
                                <div className="__block-activity margin-left-auto" title="Save">
                                    <Save product_id='0' showStats={5}/>
                                </div>
                            </div>
                            <Comments show/>
                        </div>
                        
                        <div className="product-aside">
                            <GeneralInfo/>
                            <SellerBox/>
                        </div>

                    </div>
                </div>
            <style jsx global>{productModalStyles}</style>
            </div>
         </Modal>
      );
   }
}