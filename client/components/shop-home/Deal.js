import React from "react"
import dealsStyles from '../../static/comp-styles/shop-home/Deals.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Link from 'next/link'
import Like from  '../general/Like'
import CommentsIcon from  '../general/CommentsIcon'
import Share from  '../general/Share'
import Save from  '../general/Save'

export default class Deals extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return <div className="deal-block">
                    <div className="deal-block_img">
                        <div className="_discount">40% <strong>OFF</strong></div>
                        <img src="../static/images/deal.png" alt=""/>
                    </div> 
                    <div className="deal-block__wrapper">
                        <h3>romacci Women Maxi Dress Solid Round Neck Sleeveless Racer</h3>
                        <span className="__block-price discount">
                            <strike>$399</strike>
                            $124
                            <div className="__block-shipping-price">Free Shipping</div>
                        </span>
                        <div className="deals-ends">
                            Ends in 2 days
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
                    </div>
            <style jsx global>{dealsStyles}</style>
        </div>
    }
};