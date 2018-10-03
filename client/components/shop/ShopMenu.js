import React from 'react'
import Link from 'next/link'
import shopMenuStyles from '../../static/comp-styles/shop/ShopMenu.scss'
import {ICON_SEARCH} from '../static/Icons'; 
export default class ShopMenu extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() { 
    	return <div className="shop-menu container">
                    <ul className="shop-menu__list">
                        <li className={"shop-menu__element"+ (this.props.page =='home' ? ' active' : '')}><Link href="/shop-home"><a >Home</a></Link></li>
                        <li className={"shop-menu__element"+ (this.props.page =='shop' ? ' active' : '')}><Link href="/shop"><a >Shop</a></Link></li>
                        <li className={"shop-menu__element"+ (this.props.page =='feed' ? ' active' : '')}><Link href="/shop-feed"><a >Posts (213)</a></Link></li>
                        <li className={"shop-menu__element"+ (this.props.page =='reviews' ? ' active' : '')}><Link href="/shop-reviews"><a >Reviews (114)</a></Link></li>
                        <li className={"shop-menu__element"+ (this.props.page =='about' ? ' active' : '')}><Link href="/shop-about"><a >About</a></Link></li>
                    </ul> 
                    <div className="shop-menu__search">
                        <input type="text" name="search" placeholder="Search Store"/>
                        <button className="search-btn" onClick={this.handleSearchButton}>
                            {ICON_SEARCH}
                        </button>
                    </div>
                <style jsx global>{shopMenuStyles}</style>
            </div>; 
    }
};

