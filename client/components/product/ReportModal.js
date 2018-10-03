import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import reportModalStyles from '../../static/comp-styles/product/ReportModal.scss'
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import {ICON_USER_ARROW} from '../static/Icons';
import Textarea from "react-textarea-autosize";



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
    const Spam = () => { 
        return (
        <div className={"accordion-option" + (this.state.selected === 'spam' ? ' opened' : '')}>
            <div className="option-headline" onClick={this.setReport('spam')}>
                Spam
                {ICON_USER_ARROW}
            </div>
            <div className="option-body">
                <p className="description">What kind of spam this is?</p>
                <div className="radio-option">
                    <input type="radio" name="spam" id="commercial"/>
                    <label htmlFor="commercial">Commercial</label>
                </div>
                <div className="radio-option">
                    <input type="radio" name="spam" id="offensive"/>
                    <label htmlFor="offensive">Offensive</label>
                </div>
                <div className="radio-option">
                    <input type="radio" name="spam" id="irrelevant"/>
                    <label htmlFor="irrelevant">Irrelevant</label>
                </div>
                <div className="radio-option">
                    <input type="radio" name="spam" id="other"/>
                    <label htmlFor="other">Other</label>
                </div>
                <Textarea placeholder=""/>
            </div>
            <div className="option-body"></div>
        </div>
        )
    }
    const Fraud = () => { 
        return (
        <div className={"accordion-option" + (this.state.selected === 'fraud' ? ' opened' : '')}>
            <div className="option-headline" onClick={this.setReport('fraud')}>
                Fraud
                {ICON_USER_ARROW}
            </div>
            <div className="option-body">
                <p className="description">Please tell us why do you believe this is fraud</p>
                <Textarea placeholder=""/>
            </div>
        </div>
        )
    }
    const Miscategorized = () => {
        return (
        <div className={"accordion-option" + (this.state.selected === 'miscategorized'  ? ' opened' : '')}>
            <div className="option-headline" onClick={this.setReport('miscategorized')}>
                Miscategorized
                {ICON_USER_ARROW}
            </div>
            <div className="option-body">
                <p className="description">This product will be reviewed and recategorized accordingly</p>
            </div>
        </div>
        )
    }
    const Repetitive  = () => { 
        return (
        <div className={"accordion-option" + (this.state.selected === 'repetitive' ? ' opened' : '')}>
            <div className="option-headline" onClick={this.setReport('repetitive')}>
                Repetitive
                {ICON_USER_ARROW}
            </div>
            <div className="option-body">
                <p className="description">You have chosen to Report this as a repetitive listing</p>
            </div>
        </div>
      )
    }
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
                        <h2>Report Item</h2>
                        <p className="item-name">Whoop whoop hoolahoop</p>
                        <div className="accordion">
                            <Spam/>
                            <Fraud/>
                            <Miscategorized/>
                            <Repetitive/>
                            
                        </div>
                        {this.state.selected && <div className="btn">Report {this.state.selected}</div>}
                    </div>
                </div>
            </div>
            <style jsx global>{reportModalStyles}</style>
         </Modal>
      );
   }
}