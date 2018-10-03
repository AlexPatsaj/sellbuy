import React from "react"
import mostPopularStyles from '../../static/comp-styles/shop-home/MostPopular.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Link from 'next/link'
import Ratings from 'react-ratings-declarative';
import Like from  '../general/Like'
import CommentsIcon  from  '../general/CommentsIcon'
import Save from  '../general/Save'
import Share from  '../general/Share'
import Comment from  './Comment'

export default class MostPopular extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return <div className="most-popular container">
                <div className="view-all__header">
                    <h2>Most Popular</h2>
                    <span className="_view-all">View All</span>
                </div>
                <div className="most-popular__grid">
{/* Mobile Only */}
                    <div className="most-popular_block half wrap mobile-only">
                        <div className="most-popular_block quarter active">
                            <img src="../static/images/most-popular-2.png" alt=""/>
                        </div>
                        <div className="most-popular_block quarter">
                            <img src="../static/images/most-popular-3.png" alt=""/>
                        </div>
                        <div className="most-popular_block quarter">
                            <img src="../static/images/most-popular-4.png" alt=""/>
                        </div>
                        <div className="most-popular_block quarter">
                            <img src="../static/images/most-popular-5.png" alt=""/>
                        </div>
                    </div>

                    <div className="most-popular_block half preview">
                        <img src="../static/images/most-popular-1.png" alt="" className="desktop-only"/>
                        <img src="../static/images/red-shirt-girl.jpg" alt="" className="mobile-only"/>
                        <div className="most-popular_info">
                            <div className="most-popular__info-wrapper">
                                <h3>Lossky Women Striped Ruffle Collar Dress Vestido De Festa</h3>
                                <span className="rating">
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
                                </span>
                                <span className="__block-price vmargin15">
                                    $124
                                    <div className="__block-shipping-price">Free Shipping</div>
                                </span>
                            </div>

                            <div className="most-popular__media">

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
                                
                                <hr/>

                                <div className="most-popular__comments">
                                    <Comment/>
                                    <Comment/>
                                    <Comment/>
                                    <Comment/>
                                    <Comment/>
                                </div>

                                <span className="read-all">
                                    <Link href="/"><a>Read all 2.5K comments</a></Link>
                                </span>

                            </div>
                        </div>
                    </div>
{/* Desktop Only */}
                    <div className="most-popular_block half wrap desktop-only">
                        <div className="most-popular_block quarter active">
                            <img src="../static/images/most-popular-2.png" alt=""/>
                        </div>
                        <div className="most-popular_block quarter">
                            <img src="../static/images/most-popular-3.png" alt=""/>
                        </div>
                        <div className="most-popular_block quarter">
                            <img src="../static/images/most-popular-4.png" alt=""/>
                        </div>
                        <div className="most-popular_block quarter">
                            <img src="../static/images/most-popular-5.png" alt=""/>
                        </div>
                    </div>
                </div>
            <style jsx global>{mostPopularStyles}</style>
        </div>
    }
};