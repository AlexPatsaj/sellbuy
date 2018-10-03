import React from "react";
import Link from 'next/link'
import PopularCategoriesStyles from '../../static/comp-styles/index/Store.scss'
import {ICON_HUMAN} from '../static/Icons';
import Ratings from 'react-ratings-declarative'


export default class PopularCategories extends React.Component {
    constructor(props) {
        super (props);
        this.state = {

        }
    }

    render() {
    return  <div className="index-store">
                <div className="store-bg">
                    <img src="http://localhost:3000/static/images/post-1.png"/>
                    <div className="logo">
                        <img src="static/images/shop-logo.jpg" alt=""/>
                    </div>
                </div>
                <div className="store-name">
                    <div className="store-name__info">
                        <Link href='/shop'><a><span><strong>Watsons Wedding Apparel</strong></span></a></Link>
                        <div className="store__media-parameters">
                            <Ratings
                                rating={3.5}
                                widgetRatedColors="#F7D620"
                                widgetEmptyColors="#ccc"
                                widgetHoverColors="#F7D620"
                                widgetDimensions="12px"
                                widgetSpacings="1px"
                                changeRating={this.changeRating}
                                typeOfWidget='Star'
                            >
                                <Ratings.Widget/>
                                <Ratings.Widget/>
                                <Ratings.Widget/>
                                <Ratings.Widget/>
                                <Ratings.Widget/>
                            </Ratings>
                            <div className="followers">
                                {ICON_HUMAN}
                            </div>
                            8.6K
                        </div>
                    </div>
                    <div className="store-name__address">
                        3301 Veterans Memorial Boulevard Metairie, LA, 70002 1-504-830-1400
                    </div>
                </div>
                <div className="store-products">
                    <div className="visit-store">
                        <div className="btn black">Visit Store</div>
                    </div>
                    <div className="store-product">
                        <img src="http://138.68.255.94:3001/square/images/shop-product-1.png" alt=""/>
                    </div>
                    <div className="store-product">
                        <img src="http://138.68.255.94:3001/square/images/shop-product-1.png" alt=""/>
                    </div>
                    <div className="store-product amount">
                        <p>128+</p>
                        <p>items</p>
                    </div>
                </div>
            <style jsx global>{PopularCategoriesStyles}</style>
        </div>
    }
};
