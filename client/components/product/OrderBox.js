import React from "react";
import Link from 'next/link'
import orderBoxStyles from '../../static/comp-styles/product/OrderBox.scss'
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
                    Samsung - 55” Class - LED - NU7100 Series - 2160p - Smart - 4K UHD TV with HDR
                </h1>
                <div className="orderbox-product__rating">
                    <Ratings
                        rating={3.5}
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
                    <span className="voters">(16)</span>
                </div>
                <span className="__block-price discount">
                    <span>$124</span>
                    <span className="reward-points">124 reward points</span>
                </span>
                <div className="orderbox-product__options">
                    <div className="orderbox-product__option">
                        <p>Condition:</p>
                        <strong>New</strong>
                    </div>
                    <div className="orderbox-product__option">
                        <p>Brand:</p>
                        <strong>Samsung</strong>
                    </div>
                    <div className="orderbox-product__option">
                        <p>Model:</p>
                        <strong>UN55NU7100FXZA</strong>
                    </div>
                    <div className="orderbox-product__option">
                        <p>SKU:</p>
                        <strong>6200125</strong>
                    </div>
                    <div className="dropdowns">
                        <div className="orderbox-product__option">
                            <p>Series</p>
                            <Dropdown options={this.sortBySeries}  default="4K UHD OLED"/>
                        </div>
                        <div className="orderbox-product__option">
                            <p>Protection:</p>
                            <Dropdown options={this.sortByProtection}  default="1 Year"/>
                        </div>
                        <div className="orderbox-product__option">
                            <p>Screen Sizes:</p>
                            <Dropdown options={this.sortBySize}  default="55"/>
                        </div>
                        <div className="orderbox-product__option">
                            <p>Quantity:</p>
                            <Dropdown options={this.sortByQuantity}  default="1"/>
                        </div>
                    </div>
                </div>
                
                <Colors/>
                <Sizes/>
                <div className="availability">
                    <div>Availability</div>
                    <div className="available" hidden>Available</div>
                    <div className="attention">Out of stock</div> 
                    <div className="notify-me" onClick={this.openModal}>Notify me when available</div>
                </div>
                <div className="orderbox-product__buttons">
                    <div className="btn outline">ADD TO CART</div>
                    <div className="btn">BUY NOW</div>
                </div>
                <div className="media-activity">
                    <div className="__block-activity" title="Likes">
                        <Like likes_number={this.props.likes_number} liked={false}/>
                    </div>
                    <div className="__block-activity" title="Comments">
                        <CommentsIcon comments_number={7}/>
                    </div>
                    <div className="__block-activity" title="Share">
                        <Share shares_number={34} horisontal={true}/>
                    </div>
                    <div className="__block-activity" title="Save">
                        <Save product_id='0' showStats={5}/>
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