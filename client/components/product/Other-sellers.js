import React from "react";
import otherSellersStyles from '../../static/comp-styles/product/Other-sellers.scss'
import Link from 'next/link'
import {} from '../static/Icons'; 
 
import ReactDOM from 'react-dom'; 

export default class OtherSellers extends React.Component {
    constructor(props) {
        super(props); 
        
    }

    render(){
    	return <div className="other-sellers mobile-only">
            <h4>Other Sellers</h4>
            <div className="other-sellers__info">
                <Link><a href="/">25 new</a></Link> from $30
            </div>
            <div className="other-sellers__info">
                <Link><a href="/">10 old</a></Link> from $100
            </div>
            <style jsx global>{otherSellersStyles}</style>
        </div>
    }
}