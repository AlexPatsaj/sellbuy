import React from "react"
import Link from 'next/link'
import step2Styles from '/static/comp-styles/checkout/Step2.scss'
import {} from '../static/Icons'
import Seller from '../cart/Seller'
import Item from '../cart/Item'
export default class Step2 extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
            
        // }
    }

    nextStep = () => {
        this.props.nextStep()
    }

    render() {
    return  <div className={"step2-block checkout-step" + (this.props.accordionStep === 2 ? ' active' : '')}>
                <div className={"step-heading" + (this.props.accordionStep > 2 ? ' pointer' : '')} onClick={()=>{this.props.setStep(2)}}>
                    <h3>2. Delivery Options
                    </h3>
                    {this.props.accordionStep > 2 ? 
                        <span className="btn grey">Edit</span>
                    : null}
                </div>
                    {this.props.accordionStep > 2 ? 
                    <div className="data-entry"  onClick={()=>{this.props.setStep(2)}}>
                        <h4>Baebody Retinol Moisturizer Cream for Face and Eye Area</h4>
                        <p>Free shipping</p>
                        <h4>Short Flounced dress. Must have for summer.</h4>
                        <p>Free shipping</p>
                        <h4>Leather city bag with knotted details</h4>
                        <p>Free shipping</p>
                    </div> 
                    : null}
                    <div className="step-wrapper">
                        <Seller delivery/>
                        <Item/>
                        <hr/>
                        <Item/>
                        <hr/>
                        <Item/>
                        
                        <Seller delivery/>
                        <Item/>
                        <hr/>
                        
                        <div className="btn" onClick={this.nextStep}>Proceed to Payment</div>
                    </div>
                
            <style jsx global>{step2Styles}</style>
        </div>
    }
};