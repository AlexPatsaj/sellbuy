import React from "react";
import bannerx1170x264 from '/static/comp-styles/offers/Bannerx1170x264.scss'
import Ratings from 'react-ratings-declarative';
/* Components */
import Save from  '../../components/general/Save'
import Like from  '../../components/general/Like'
import CommentsIcon from  '../../components/general/CommentsIcon'
import {ICON_COMMENTS, ADD_TO_CART} from '../static/Icons'

export default class Bannerx1170x264 extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
      render() {
        return <div className="more-deals__block">
                    <div className="img-wrapper">
                        <div className="img-wrapper-overflow-hidden">
                            <img src="../static/images/more-deals-1.png" alt=""/>
                        </div>
                    </div>
                    <div className="more-deals__block-other first-block">
                        <div className="more-deals__block-other-general">
                            <span className="more-deals__block-price">
                                <strike>$399</strike>
                                $124
                                <div className="more-deals__block-shipping-price">Free Shipping</div>
                            </span>
                            
                        </div>
                        <div className="more-deals__block-misc-info">
                            <div className="more-deals__block-misc comments" title="Comments">
                                <CommentsIcon comments_number={7}/>
                            </div>
                            <div className="more-deals__block-like" title="Likes">
                                <Like likes_number={0} liked={false}/>
                            </div>
                        </div>
                    </div>
                    <div className="more-deals__block-title">
                        <h3>romacci Women Maxi Dress Solid Round Neck Sleeveless Racer</h3>
                    </div>
                    <div className="more-deals__block-other ">
                        <div className="more-deals__block-other-general">
                            <div className="more-deals__block-rating">
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
                            </div>
                            <div className="btn add-to-cart">
                                {ADD_TO_CART}
                                ADD TO CART
                            </div>
                        </div>
                        <div className="more-deals__block-misc-info">
                            <div className="more-deal__shop-name">
                                Well known shop's name
                            </div>
                            <Save product_id='0'/>
                        </div>
                    </div>
                <style jsx>{bannerx1170x264}</style>
            </div>
        }
};