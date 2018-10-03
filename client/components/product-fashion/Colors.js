import React from "react";
import colorstyles from '../../static/comp-styles/product-fashion/Colors.scss'
import Link from 'next/link'
import {} from '../static/Icons'; 
 
import ReactDOM from 'react-dom'; 

export default class OtherSellers extends React.Component {
    constructor(props) {
        super(props); 
        
    }

    render(){
    	return <div className="orderbox-product__color">
                <div className="title">Color:</div>
                <div className="colors">
                    <div className="product__color-option color" style={{backgroundColor: "#ED484F"}}>
                        <input type="radio" name="color-selector" id="#ED484F" defaultChecked/>
                        <label htmlFor="#ED484F" style={{border: "1px solid #ED484F"}}></label>
                    </div>
                    <div className="product__color-option color" style={{backgroundColor: "#4731C3"}}>
                        <input type="radio" name="color-selector" id="#4731C3"/>
                        <label htmlFor="#4731C3" style={{border: "1px solid #4731C3"}}></label>
                    </div>
                    <div className="product__color-option color" style={{backgroundColor: "#ED7B48"}}>
                        <input type="radio" name="color-selector" id="#ED7B48"/>
                        <label htmlFor="#ED7B48" style={{border: "1px solid #ED7B48"}}></label>
                    </div>
                    <div className="product__color-option color" style={{backgroundColor: "#2C2C2C"}}>
                        <input type="radio" name="color-selector" id="#2C2C2C"/>
                        <label htmlFor="#2C2C2C" style={{border: "1px solid #2C2C2C"}}></label>
                    </div>
                </div>
            <style jsx global>{colorstyles}</style>
        </div>
    }
}