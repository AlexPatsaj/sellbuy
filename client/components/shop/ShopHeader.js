import React from "react";
import Link from 'next/link'
import shopHeaderStyles from '../../static/comp-styles/seller/ShopHeader.scss'
import {} from '../static/Icons'; 
import HeaderBannerStatic from  './ShopHeaderBanner'
import ShopInfo from './ShopInfo'; 
import ShopMenu from './ShopMenu'; 

export default class ShopHeader extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className={"shop-header product-page__side " + (this.props.mobile ? 'mobile' : '')}>
                <HeaderBannerStatic page={'shop'}/>
                <ShopInfo/>
                <ShopMenu page={this.props.page}/>
            <style jsx global>{shopHeaderStyles}</style>
        </div>
    }
};