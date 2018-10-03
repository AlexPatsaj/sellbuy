import React from "react";
import colorstyles from '../../static/comp-styles/product/Colors.scss'
import Link from 'next/link'
import {} from '../static/Icons'; 
 
import ReactDOM from 'react-dom'; 

export default class OtherSellers extends React.Component {
    constructor(props) {
        super(props); 
        
    }

    render(){
    	return <div className="orderbox-product__color">
                <div className="product__color-option">Color</div>
                <div className="colors">
                    <div className="product__color-option color" style={{backgroundColor: "#db8686"}}>
                        <input type="radio" name="color-selector" id="#db8686" defaultChecked/>
                        <label htmlFor="#db8686" style={{border: "1px solid #db8686"}}></label>
                    </div>
                    <div className="product__color-option color" style={{backgroundColor: "#9386db"}}>
                        <input type="radio" name="color-selector" id="#9386db"/>
                        <label htmlFor="#9386db" style={{border: "1px solid #9386db"}}></label>
                    </div>
                    <div className="product__color-option color" style={{backgroundColor: "#d886db"}}>
                        <input type="radio" name="color-selector" id="#d886db"/>
                        <label htmlFor="#d886db" style={{border: "1px solid #d886db"}}></label>
                    </div>
                    <div className="product__color-option color" style={{backgroundColor: "#86dba7"}}>
                        <input type="radio" name="color-selector" id="#86dba7"/>
                        <label htmlFor="#86dba7" style={{border: "1px solid #86dba7"}}></label>
                    </div>
                </div>
            <style jsx global>{colorstyles}</style>
        </div>
    }
}