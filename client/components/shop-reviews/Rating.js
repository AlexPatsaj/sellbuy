import React from 'react'
import Link from 'next/link'
import ratingStyles from '../../static/comp-styles/shop-reviews/Rating.scss'
import {ICON_SEARCH} from '../static/Icons'; 
import Ratings from 'react-ratings-declarative';

export default class Rating extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() { 
    	return <div className="rating container">
                    <div className="extended-stats">
                        <div className="stat">
                            <span>5 stars</span>
                            <div className="bar" style={{width: "56%"}}></div>
                            <div className="amount">26</div>
                        </div>
                        <div className="stat">
                            <span>4 stars</span>
                            <div className="bar" style={{width: "46%"}}></div>
                            <div className="amount">58</div>
                        </div>
                        <div className="stat">
                            <span>3 stars</span>
                            <div className="bar" style={{width: "36%"}}></div>
                            <div className="amount">12</div>
                        </div>
                        <div className="stat">
                            <span>2 stars</span>
                            <div className="bar" style={{width: "26%"}}></div>
                            <div className="amount">8</div>
                        </div>
                        <div className="stat">
                            <span>1 stars</span>
                            <div className="bar" style={{width: "16%"}}></div>
                            <div className="amount">2</div>
                        </div>
                    </div>

                    <div className="total-stats">
                        <div className="stat-summary">
                            <div className="score">4.6</div>
                            <span className="of">of 5 stars</span>
                        </div>
                        <Ratings
                            rating={4.6}
                            widgetRatedColors="#F7D620"
                            widgetEmptyColors="#ccc"
                            widgetDimensions="36px"
                            widgetSpacings="3px"
                            changeRating={this.changeRating}
                            typeOfWidget='Star'
                            >
                            <Ratings.Widget  widgetHoverColor="#F7D620"/>
                            <Ratings.Widget  widgetHoverColor="#F7D620"/>
                            <Ratings.Widget widgetHoverColor="#F7D620"/>
                            <Ratings.Widget widgetHoverColor="#F7D620" />
                            <Ratings.Widget widgetHoverColor="#F7D620"/>
                        </Ratings>
                        <div className="total-scores">
                            Based on 106 reviews
                        </div>
                    </div>
                <style jsx global>{ratingStyles}</style>
            </div>; 
    }
};

