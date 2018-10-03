import React from "react";
import Link from 'next/link'
import step3Styles from '../../static/comp-styles/checkout/Step3.scss'
import {ICON_UI_TICK, ICON_MASTERCARD, ICON_VISA, ICON_PAYPAL} from '../static/Icons'; 
import CardEdit from './CardEdit'

export default class Step3 extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            isEdit: false,
            isAdd: false,
        }
    } 

    edit = (add) => {
        add === 'add' ?
        this.setState({
            isEdit: !this.state.isEdit,
            isAdd: !this.state.isAdd
        }) :
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        let form = document.querySelector('.address-form');
        if (!e.target.checkValidity()) {
            form.classList.add("has-error");
            return;
          } else {
              console.log("In case everything went well we can send form");
          }
    }

    render() {

    return  <div className={"step3-block checkout-step" + (this.props.accordionStep === 3 ? ' active' : '')}>
                <div className="step-heading">
                    <h3>3. Payment Options</h3>
                </div>
                <div className="step-wrapper">
                    {
                    this.state.isEdit ? 
                    <CardEdit edit={this.edit}/>
                    :
                    <React.Fragment>
                        <div className="payment-method__select mastercard">
                            <input type="radio" name="payment-method" id={"this.props.id1"} />
                            <label htmlFor={"this.props.id1"}>
                                <div className="method-name">
                                    {ICON_MASTERCARD}
                                </div>
                                <div className="card-digits">
                                    MasterCard ending in 12/2020
                                </div>
                                <div className="card-ends">
                                    01/20
                                </div>
                                <div className="card-control">
                                    <div className="control-option" onClick={this.edit}>
                                        Edit
                                    </div>
                                    <div className="control-option">
                                        Remove
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="payment-method__select visa">
                            <input type="radio" name="payment-method" id={"this.props.id2"} />
                            <label htmlFor={"this.props.id2"}>
                                <div className="method-name">
                                    {ICON_VISA}
                                </div>
                                <div className="card-digits">
                                    VISA ending in 12/2020
                                </div>
                                <div className="card-ends">
                                    01/20
                                </div>
                                <div className="card-control">
                                    <div className="control-option" onClick={this.edit}>
                                        Edit
                                    </div>
                                    <div className="control-option">
                                        Remove
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="payment-method__select paypal">
                            <input type="radio" name="payment-method" id={"this.props.id3"} />
                            <label htmlFor={"this.props.id3"}>
                                <div className="method-name">
                                    {ICON_PAYPAL}
                                </div>
                            </label>
                        </div>
                        <div className="payment-method__select">
                            <input type="radio" name="payment-method" id={"this.props.id4"} />
                            <label htmlFor={"this.props.id4"}>
                                <div className="method-name">
                                    Cash
                                </div>
                            </label>
                        </div>
                        <div className="add-card" onClick={() => {this.edit("add")}}>Add Credit/Debit Card</div>
                        <Link><a href="/processing-result">
                            <div className="btn">Place Order</div>
                        </a></Link>
                        
                    </React.Fragment>
                    }
                </div>
            <style jsx global>{step3Styles}</style>
        </div>
    }
};