import React from 'react'
import Link from 'next/link'
import reviewsStyles from '../../static/comp-styles/shop-reviews/Reviews.scss'
import {ICON_SEARCH} from '../static/Icons'; 
import Dropdown from  '../general/Dropdown.js'
import Review from  './Review'

export default class Reviews extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() { 
    	return <div className="reviews container">
                    <div className="reviews-header">
                        <h1>Latest reviews about Madewell</h1>
                        <Dropdown/>
                    </div>
                    <hr/>
                    <Review/>
                    <hr/>
                    <Review/>
                    <hr/>
                    <Review/>
                    <hr/>
                    <Review/>
                    <hr/>
                    <Review/>
                    <div className="btn">SHOW MORE</div>
                <style jsx global>{reviewsStyles}</style>
            </div>; 
    }
};

