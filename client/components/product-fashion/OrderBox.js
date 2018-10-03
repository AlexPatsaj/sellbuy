import React from "react";
import Link from 'next/link'
import orderBoxStyles from '../../static/comp-styles/product-fashion/OrderBox.scss'
import {} from '../static/Icons'; 
import Ratings from 'react-ratings-declarative';
import Like from  '../general/Like'
import CommentsIcon from  '../general/CommentsIcon'
import Share from  '../general/Share'
import Save from  '../general/Save'
import Dropdown from  '../general/Dropdown'
import Colors from  './Colors'
import Sizes from  './Sizes'
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import AvailabilityModal from "./AvailabilityModal";

export default class OrderBox extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            sortby: 'Lowest Price',
        }
        this.sortBySeries = ["SOBNWISWRJ23-1", "SOMEOPTION388-13","Nearest on Map"];
        this.sortByProtection = ["1 Year", "2 Years", "No Protection"];
        this.sortBySize = ["45", "55","77"];
        this.sortByQuantity = ["1", "2","3"];
    }
    openModal = (e)=> {
        e.preventDefault();
        ModalManager.open(<AvailabilityModal product={this.props.product} onRequestClose={() => true}/>);
    }
    render() {
    return  <div className={"product-page__orderbox" + (this.props.mobile ? ' mobile-only' : '')}>
                <h1 className="orderbox-product__title">
                    2018 Floral Dresses Vestido De Festa
                </h1>
                <div className="orderbox-product__rating">
                    <Ratings
                        rating={4}
                        widgetRatedColors="#F7D620"
                        widgetEmptyColors="#ccc"
                        widgetHoverColors="#F7D620"
                        widgetDimensions="16px"
                        widgetSpacings="2px"
                        changeRating={this.changeRating}
                        typeOfWidget='Star'
                    >
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                        <Ratings.Widget/>
                    </Ratings>
                    <span className="voters">(62)</span>
                </div>
                <span className="__block-price discount">
                    <div>$124</div>
                    <div className="reward-points">124 reward points</div>
                </span>
                <div className="vline"></div>
                <div className="orderbox-product__options">
                    <div className="orderbox-product__option">
                        <div className="title">Condition:</div>
                        <div className="content">New</div>
                    </div>
                    <div className="orderbox-product__option">
                        <div className="title">Brand:</div>
                        <div className="content">
                            Zara
                            <a href="">Shop Brand</a>
                        </div>
                    </div>
                </div>
                <Sizes/>
                <Colors/>
                <div className="orderbox-product__options">
                    <div className="dropdowns">
                        <div className="orderbox-product__option">
                            <div className="title">Quantity:</div>
                            <div className="quantity">
                                <Dropdown options={this.sortByQuantity}  default="1"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="orderbox-product__buttons">
                    <div className="btn outline">ADD TO CART</div>
                    <div className="btn glow">BUY NOW</div>
                </div>
                <div className="media-activity">
                    <div className="__block-activity" title="Likes">
                        <Like likes_number={146} liked={true}/>
                    </div>
                    <div className="__block-activity" title="Comments">
                        <CommentsIcon comments_number={12}/>
                    </div>
                    <div className="__block-activity" title="Share">
                        <Share shares_number={12} horisontal={true}/>
                    </div>
                    <div className="__block-activity" title="Save">
                        <Save product_id='0' showStats={96}/>
                    </div>
                </div>
                <div className="media-activity__mobile mobile-only">
                    <div className="media__mobile">
                        <div className="__block-activity" title="Likes">
                            <Like likes_number={this.props.likes_number} liked={false}/>
                        </div>
                        <div className="__block-activity" title="Comments">
                            <CommentsIcon comments_number={7}/>
                        </div>
                        <div className="avatars">
                            <div className="avatar">
                                <img src="../static/images/avatar.png" alt=""/>
                            </div>
                            <div className="avatar">
                                <img src="../static/images/avatar.png" alt=""/>
                            </div>
                            <div className="avatar">
                                <img src="../static/images/avatar.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <Link><a href="/">Leave comment</a></Link>
                    <div className="media__mobile share-save">
                        <div className="__block-activity" title="Likes">
                            <Share shares_number={34} horisontal={true}/>
                        </div>
                        <div className="__block-activity" title="Comments">
                            <Save product_id='0' showStats={5}/>
                        </div>
                    </div>
                </div>
            <style jsx global>{orderBoxStyles}</style>
        </div>
    }
};