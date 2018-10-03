import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PostPreviewModalStyles from '../../static/comp-styles/feed/PostPreviewModal.scss'
import { Modal, ModalManager, Effect} from 'react-dynamic-modal'
import {ICON_CREATE_LIST, 
        ICON_ADD_IMAGE, 
        ICON_TAG, 
        ICON_SOCIAL_FACEBOOK,
        ICON_SOCIAL_INSTAGRAM,
        ICON_SOCIAL_LINKEDIN,
        ICON_SOCIAL_PINTEREST,
        ICON_SOCIAL_TWITTER,
        ICON_SOCIAL_LINK} from '../static/Icons'
import PostTypeProductModal from './PostTypeProductModal'
import Midddly from '../../models/Midddly' 
import Comments from './Comments'
import PostsYouMayLike from './PostsYouMayLike'
import Ratings from 'react-ratings-declarative'
import Link from 'next/link'
import {ICON_HUMAN} from '../static/Icons' 

/** 
*   Todo: if this class receives a post via props, then prefill everything with those values 
*/ 
export default class PostPreviewModal extends React.Component{
	constructor(props) {
    super (props);
        this.state = {
 
        }; 

        // this.textarea = null; 
    }

    componentDidMount(){
        document.body.classList.add('locked');
        document.querySelector('html').classList.add('locked');
    //     this.state.products.push(Midddly.getProductById(1));
    //     this.state.products.push(Midddly.getProductById(3));
    //     this.state.products.push(Midddly.getProductById(4));
    //     this.state.products.push(Midddly.getProductById(6));

    //     this.setState({
    //         'products':   this.state.products
    //     });

    //     this.textarea.value = this.state.text;  
    }
    componentWillUnmount() {
         document.body.classList.remove('locked');
        document.querySelector('html').classList.remove('locked');
    }
    appendClasses(modalnode){
        if(modalnode == null){
            console.log("trying to appendClasses to null");
            return;
        }

        modalnode.refs.content.className  = "modal-preview-bodyClass"; 
        modalnode.refs.overlay.className = 'modal-preview-overlayClass'; 
    }
    
    /*
        * @param idx int - the index of the image to remove 
    */
    // removeImg(idx){
    //     this.state.imgs.splice(idx,1); 
    //     this.setState({
    //         post:this.state.post
    //     }); 
    // }

    // /* 
    //     * @param id int - the product id 
    //     * removes the product of id: id from this post 
    // */
    // removeProduct(id){
    //     let products = this.state.products; 

    //     for(let x=0; x< products.length; ++x){
    //         if(products[x].id == id){
    //             products.splice(x,1); 
    //         }
    //     }
    //     this.setState({
    //         'products':products
    //     }); 
    // }

   	render(){
	  const { header, onRequestClose } = this.props;
	
      return (
         <Modal
            onRequestClose={onRequestClose}
            effect={Effect.Fall}
            ref={ (modal) => { this.appendClasses(modal) } }
			>
            <div className="modal-wrapper add-form">
                <div className="modal-body">
                    <div className="modal-close" onClick={ModalManager.close}>
                        ×
                    </div>
                    
                    <div className="modal-form">
                        <div className="body">
                            <PostTypeProductModal noComments/>
                            <div className="right-side">
                                <div className="feed-left__store-name">
                                    <div className="feed-left__avatar-mobile avatar">
                                        <a><img src="../static/images/avatar.png" alt=""/></a>
                                    </div>
                                    <div className="store-name__wrapper">
                                        <Link href='/shop'><a><span><strong>Watsons Wedding Apparel</strong></span></a></Link>
                                        <div className="feed-left__store-media-parameters">
                                            <Ratings
                                                rating={3.5}
                                                widgetRatedColors="#F7D620"
                                                widgetEmptyColors="#ccc"
                                                widgetHoverColors="#F7D620"
                                                widgetDimensions="12px"
                                                widgetSpacings="1px"
                                                changeRating={this.changeRating}
                                                typeOfWidget='Star'
                                            >
                                                <Ratings.Widget/>
                                                <Ratings.Widget/>
                                                <Ratings.Widget/>
                                                <Ratings.Widget/>
                                                <Ratings.Widget/>
                                            </Ratings>
                                            <div className="followers">
                                                {ICON_HUMAN}
                                            </div>
                                            8.6K
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <Comments show/>
                            </div>
                        </div>
                        <PostsYouMayLike modal/>
                    </div>
                </div>
            </div>
            <style jsx global>{PostPreviewModalStyles}</style>
         </Modal>
      );
   }
}