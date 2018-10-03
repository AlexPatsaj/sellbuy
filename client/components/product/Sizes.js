import React from "react";
import sizesStyles from '../../static/comp-styles/product/Sizes.scss'
import Link from 'next/link'
import {} from '../static/Icons'; 
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import SizesModal from "./SizesModal";

import ReactDOM from 'react-dom'; 

export default class Sizes extends React.Component {
    constructor(props) {
        super(props); 
        
    }
    openModal = (e)=> {
        e.preventDefault();
        ModalManager.open(<SizesModal product={this.props.product} onRequestClose={() => true}/>);
    }
    render(){
    	return <div className="orderbox-product__size">
                <div className="size-option">Size</div>
                <div className="sizes">
                    <div className="size-option size">
                        <input type="radio" name="size-selector" id="S" defaultChecked/>
                        <label htmlFor="S">S</label>
                    </div>
                    <div className="size-option size">
                        <input type="radio" name="size-selector" id="M"/>
                        <label htmlFor="M">M</label>
                    </div>
                    <div className="size-option size">
                        <input type="radio" name="size-selector" id="L"/>
                        <label htmlFor="L">L</label>
                    </div>
                    <div className="size-option size">
                        <input type="radio" name="size-selector" id="XL"/>
                        <label htmlFor="XL">XL</label>
                    </div>
                </div>
                <a onClick={this.openModal}>Size guide</a>
            <style jsx global>{sizesStyles}</style>
        </div>
    }
}