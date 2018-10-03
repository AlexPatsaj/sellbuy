import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import {} from '../static/Icons';
        import Gallery from "./Gallery";

export default class ImageModal extends React.Component{
	constructor(props) {
    super (props);
        this.state = {

        }
    }

    appendClasses(modalnode){
        modalnode.refs.content.className  = "modal-gallery-bodyClass"; 
        modalnode.refs.overlay.className = 'modal-gallery-overlayClass'; 
    }
    
   	render(){
	  const { header, onRequestClose } = this.props;
	  if (this.props.text) {
		  const { text } = this.props;
      }
      console.log(this.props.product);
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
                        <Gallery product={this.props.product}/>
                    </div>
                </div>
            </div>
         </Modal>
      );
   }
}