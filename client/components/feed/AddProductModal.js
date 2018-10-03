import React,{Component} from 'react'
import AddProductModalStyles from '../../static/comp-styles/feed/AddProductModal.scss'
import { Modal, ModalManager, Effect} from 'react-dynamic-modal/lib'
import {} from '../static/Icons'
import ProductPostPreview from "./ProductPostPreview"
import Midddly from '../../models/Midddly'

/** 
*   Todo: if this class receives a post via props, then prefill everything with those values 
*/ 
export default class AddProductModal extends React.Component{
	constructor(props) {
    super (props);
        this.state = {
            products:[],
        }; 
    }

    componentDidMount =()=>{
        document.body.classList.add('locked');
        document.querySelector('html').classList.add('locked');
        let temp = [];
        temp.push(Midddly.getProductById(1));
        temp.push(Midddly.getProductById(3));
        temp.push(Midddly.getProductById(4));
        temp.push(Midddly.getProductById(6));
        // console.log("temp", temp);
        // this.state.products.push(Midddly.getProductById(1));
        // this.state.products.push(Midddly.getProductById(3));
        // this.state.products.push(Midddly.getProductById(4));
        // this.state.products.push(Midddly.getProductById(6));

        this.setState({
            'products':   temp
        });

    }

    componentWillUnmount() {
        document.body.classList.remove('locked');
        document.querySelector('html').classList.remove('locked');
    }

    removeProduct(id){
        let products = this.state.products; 

        for(let x=0; x< products.length; ++x){
            if(products[x].id == id){
                products.splice(x,1); 
            }
        }
        this.setState({
            'products':products
        }); 
    }

    appendClasses(modalnode){
        if(modalnode == null){
            console.log("trying to appendClasses to null");
            return;
        }

        modalnode.refs.content.className  = "modal-product-bodyClass"; 
        modalnode.refs.overlay.className = 'modal-product-overlayClass'; 
    }
    
    /*
        * @param idx int - the index of the image to remove 
    */
   
   signIn(event){
        this.setState({
            'loading' : true 
        });
    }
   	render(){
	  const { header, onRequestClose } = this.props;
      console.log("this.state", this.state)
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
                        <h4>Add product to the post</h4>
                        <form>
                            <div className="-input">
                                <label htmlFor="link">Enter the link to the product</label>
                                <input type="text" name="link" id="link" autoComplete="link" autoFocus tabIndex="0"  />
                                <span className="focused"></span>
                            </div>
                        </form>
                        <div className="add-product-wrapper">
                            {
                                this.state.products.map((prod , idx)=>{
                                    return <ProductPostPreview editable product={prod} callback={this.removeProduct.bind(this)} key={'new-post-product'+idx}/> 
                                })
                            } 
                        </div>
                        <div className="add-post-send">
                            <div className="btn grey">
                                +
                            </div>
                            <div className={"btn" + (this.state.loading ? ' loading' : '') } onClick={this.signIn.bind(this)}>
                                <span class="preloader">
                                    <span class="left"><span class="anim"></span></span>
                                    <span class="right"><span class="anim"></span></span>
                                </span>
                                Add
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>{AddProductModalStyles}</style>
         </Modal>
      );
   }
}