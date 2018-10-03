import React from "react";
import Link from 'next/link'
// import addressStyles from '../../static/comp-styles/checkout/CardEdit.scss'
import {IMaskInput} from 'react-imask'
import {ICON_UI_TICK, ICON_MASTERCARD, ICON_VISA, ICON_PAYPAL} from '../static/Icons'
import {Number, Cvc, Expiration} from 'react-credit-card-primitives'

export default class CardEdit extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            useDifferentAddress: false
        }
    }
    
    edit = () => {
        this.props.edit();
    }

    useDifferent = () => {
        this.setState({
            useDifferentAddress: true
        })
    }

    useCurrent = () => {
        this.setState({
            useDifferentAddress: false
        })
    }

    render() {
    return  <React.Fragment>
                <h4>{ this.state.isAdd ? "Add New" : "Edit" } Card {ICON_MASTERCARD} {ICON_VISA}</h4>
                <form noValidate autoComplete="on" onSubmit={this.handleSumbit} className="address-form">
                    <div className="address-input">
                        <label htmlFor="cardnumber">Card Number</label>
                        <Number
                            onChange={({value, valid}) => console.log(value, valid)}
                            render={({
                                getInputProps,
                                valid
                            }) => <input {...getInputProps()} className={valid ? '' : 'error'} />} name="cardnumber" autoComplete="cc-number" id="cardnumber" required/>
                    </div>
                    <div className="address-input">
                        <label htmlFor="ccname">Cardholder Name</label>
                        <input type="text" name="ccname" id="ccname" autoComplete="cc-name" required/>
                    </div>
                    <div className="address-input">
                        <label htmlFor="exp-date">Expiry Date</label>
                        <Expiration
                            onChange={({month, year, valid}) => console.log(month, year, valid)}
                            render={({
                                getInputProps,
                                valid,
                                error
                            }) => (
                                <div>
                                <input {...getInputProps()} className={valid ? '' : 'error'}  autoComplete="cc-exp" name="exp-date" id="exp-date" required/>
                                {/* {!value ? ''
                                    : error === Expiration.ERROR_MONTHYEAR ? 'Please enter valid month and year'
                                    : error === Expiration.ERROR_MONTH ? 'Please enter valid month'
                                    : error === Expiration.ERROR_YEAR ? 'Please enter valid year'
                                    : error === Expiration.ERROR_PAST_DATE ? 'Please enter a date in the future.'
                                    : ''} */}
                                </div>
                            )} />
                    </div>
                    <div className="address-input">
                        <label htmlFor="cvc">CVV Code</label>
                        <Cvc
                            onChange={({value, valid}) => console.log(value, valid)}
                            render={({
                                getInputProps,
                                valid
                            }) => <input {...getInputProps()} className={valid ? '' : 'error'} />} name="cvc" autoComplete="cc-csc" id="cvc" required/>
                            
                    </div>
                    {this.state.isDifferentAddress ? <BillingAddress/> : null }
                </form>
                <form noValidate autoComplete="on" onSubmit={this.handleSumbit} className="address-form">
                <h4>Billing Address</h4>
                <div className="billing-choice">
                    <div className="choice-wrapper">
                        <div className="input-radio" onClick={this.useCurrent}>
                            <input type="radio" name="billing-address" id="use-current" defaultChecked/>
                            <label htmlFor="use-current">Use my shipping address</label>
                        </div>
                        <div className="input-radio" onClick={this.useDifferent}>
                            <input type="radio" name="billing-address" id="use-different"/>
                            <label htmlFor="use-different">Use a different address</label>
                        </div>
                    </div>
                {
                this.state.useDifferentAddress ? 
                    <div className="billing-form">
                        <div className="address-input">
                            {/* Can we suggest country automatically, right? */}
                            <label htmlFor="country">Country</label>
                            <input type="text" id="country" name="country" autoComplete="shipping country-name" required />
                        </div>
                        <div className="address-input">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" autoComplete="shipping address-level2" pattern="[a-zA-Z\d\s\-\,\#\.\+]+" required />
                        </div>
                        <div className="address-input">
                            <label htmlFor="address-line-1">Address Line 1</label>
                            <input type="text"  id="address-line-1" name="address" autoComplete="shipping address-line1" required />
                        </div>
                        <div className="address-input">
                            <label htmlFor="address-line-2">Address Line 2</label>
                            <input type="text" id="address-line-2" name="address" autoComplete="shipping address-line2"  />
                        </div>
                        <div className="address-input zip">
                            <label htmlFor="zip">Zip Code</label>
                            <input type="text"  id="zip" name="zip" autoComplete="shipping postal-code" required pattern="^\d{5,6}(?:[-\s]\d{4})?$" maxLength="6"/>
                        </div>
                        <div className="address-input">
                            <label htmlFor="phone">Phone Number</label>
                            <IMaskInput mask={"+" + (this.state.country) + " (000) 000-00-00"} className="input-phone" tabIndex="5" onChange={this.handleChanges} type="tel" id="phone" name="phone" autoComplete="tel" required />
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" name="save-card" id="save-card"/>
                            <label htmlFor="save-card">Save this card for future purchases</label>
                            {ICON_UI_TICK}
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" name="make-default" id="make-default"/>
                            <label htmlFor="make-default">Make this my default card</label>
                            {ICON_UI_TICK}
                        </div>
                    </div>
                : null
                }
                <div className="btns">
                    <button className="btn">Place Order</button> 
                    <div className="cancel" onClick={this.edit}>Cancel</div>
                </div>
                </div>
                </form>
            {/* <style jsx global>{addressStyles}</style> */}
        </React.Fragment>
    }
};