import React from "react";
import Link from 'next/link'
import addressStyles from '../../static/comp-styles/checkout/Address.scss'


export default class Address extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
        }
    }
    edit = () => {
        this.props.edit();
    }
    render() {
    return  <div className="address-block">
                
                    <div className="address-select">
                        <input type="radio" name="shipping-address" id={this.props.id} defaultChecked={this.props.default ? 'true' : null}/>
                        <label htmlFor={this.props.id}>
                            <p>Angela C. Harvey</p>
                            <p>1453 Rosemont Avenue, Cocoa Beach, FL 23231</p>
                            <p>305-578-4836</p>
                        </label>
                    </div>
                    <div className="address-control">
                        <div className="control-option" onClick={this.edit}>
                            Edit
                        </div>
                        <div className="control-option">
                            Remove
                        </div>
                    </div>
                
            <style jsx global>{addressStyles}</style>
        </div>
    }
};