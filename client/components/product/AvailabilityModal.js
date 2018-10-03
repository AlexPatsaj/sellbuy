import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import reportModalStyles from '../../static/comp-styles/product/ReportModal.scss'
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import {ICON_USER_ARROW} from '../static/Icons';
import Textarea from "react-textarea-autosize";
import {IMaskInput} from 'react-imask';

export default class ReportModal extends React.Component{
	constructor(props) {
    super (props);
        this.state = {
            selected: ''
        }
    }

    appendClasses(modalnode){
        modalnode.refs.content.className  = "modal-tiny-bodyClass"; 
        modalnode.refs.overlay.className = 'modal-tiny-overlayClass'; 
    }

    setReport = (select) => {
        this.setState({ selected: select })
    }

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
                    <div className="modal-form report-modal">
                        <h2>Availability Notification</h2>
                        <p className="item-name">Fill your e-mail below and we will notify you as soon as the product is back in stock!</p>
                        <form className="accordion">
                            <label><strong>Email adress</strong></label>
                            <IMaskInput type="email" required/>
                        </form>
                        <div className="btn">Notify me</div>
                    </div>
                </div>
            </div>
            <style jsx global>{reportModalStyles}</style>
         </Modal>
      );
   }
}