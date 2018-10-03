import React from "react"
import saleItemsStyles from '../../static/comp-styles/shop-home/SaleItems.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Link from 'next/link'
import Like from  '../general/Like'

export default class SaleItems extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return <div className="sale-items_item">
                        <div className="sale-items_img">
                            <div className="_discount">40% <strong>OFF</strong></div>
                            <img src="../static/images/recent-post1.png" alt=""/>
                        </div>
                        <div className="sale-items_info">
                            <h3>romacci Women Maxi Dress Solid Round Neck Sleeveless Racer</h3>
                            <div className="__block-other-general">
                                <span className="__block-price discount">
                                    <strike>$399</strike>
                                    $124
                                    <div className="__block-shipping-price">Free Shipping</div>
                                </span>
                                <div className="__block-like" title="Likes">
                                    <Like likes_number={20} liked={false}/>
                                </div>
                            </div>
                        </div>
            <style jsx global>{saleItemsStyles}</style>
        </div>
    }
};