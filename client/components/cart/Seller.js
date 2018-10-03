import React from "react";
import Link from 'next/link'
import sellerStyles from '../../static/comp-styles/cart/Seller.scss'
import {ICON_HUMAN} from '../static/Icons'; 
import Ratings from 'react-ratings-declarative'

export default class Seller extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
        }
    } 
    render() {
    return  <div className="my-items-seller">
                {
                this.props.delivery ? 
                <div className="my-items-seller-avatar avatar">
                    <img src="../static/images/avatar.png" alt=""/>
                </div>
                : null
                }
                <div className="my-items-seller-info">
                    <div className="my-items-seller-name">
                        <strong>Bershka</strong> Seller
                    </div>
                    <div className="my-items__block-stars">
                        <Ratings
                            rating={3.5}
                            widgetRatedColors="#F7D620"
                            widgetEmptyColors="#ccc"
                            widgetDimensions="16px"
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
                        <span className="voters">(16)</span>
                        <div className="followers">
                            {ICON_HUMAN}
                        </div>
                        8.6K
                    </div>
                </div>
            <style jsx global>{sellerStyles}</style>
        </div>
    }
};