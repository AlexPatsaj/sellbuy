import React from "react";
import cartStyles from '../../static/comp-styles/cart/Item.scss'
//Components
import Dropdown from  '../general/Dropdown.js'

import Save from  '../general/Save'
import {ICON_HUMAN, ICON_REMOVE} from '../static/Icons'
import InputNumber from 'rc-input-number';

export default class Cart extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            value: 1,
            sortby: '$5.99: Seller Shipping (3-5 days)'
        }
        this.sortby = ["$5.99: Seller Shipping (3-5 days)", "Free Shipping", "$32: DHL delivery"];
    } 
    onChange = (value) => {
        console.log('onChange:', value);
        this.setState({ value });
    }

    handleChoice = (choice) => {
        this.setState({sortby: choice, opened: false});
    }

    render() {
        return <div className="my-items-item">
                    <img src="../static/images/cart.jpg" alt=""/>
                    <div className="my-items-item-info">
                        <div className="my-items-item-info-head">
                            <h4>Baebody Retinol Moisturizer Cream for Face and Eye Area</h4>
                        </div>
                        <div className="my-items-item-info-body">
                            <div className="my-items-item-parameter">
                                <div className="parameter__key">
                                    Color:
                                </div>
                                <div className="parameter__value">
                                    Red
                                </div>
                            </div>
                            <div className="my-items-item-parameter">
                                <div className="parameter__key">
                                    Size:
                                </div>
                                <div className="parameter__value">
                                    XS
                                </div>
                            </div>
                            <div className="my-items-item-parameter">
                                <div className="parameter__key">
                                    Quantity:
                                </div>
                                <div className="parameter__value">
                                    1
                                </div>
                            </div>
                            <Dropdown  options={this.sortby} callback={this.handleChoice.bind(this)} default={this.state.sortby}/>
                            
                        </div>
                    </div>
                    <div className="my-items-item-info-head-wrapper">
                        <div className="my-items-item-head-price">
                            <span className="my-items__new-price">
                                $230.20
                            </span>
                            <div className="item-delivery__cost">
                                Shipping: Free
                            </div>
                        </div>
                    </div>
                <style jsx global>{cartStyles}</style>
        </div>
    }
};