import React from "react";
import Link from 'next/link'
import bannerStaticSellWithUsStyles from '../../static/comp-styles/product/BannerStaticSellWithUs.scss'
import {} from '../static/Icons'; 

export default class BannerStaticSellWithUs extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className={"banner-static__sell-with-us " + (this.props.mobile ? 'mobile' : '')}>
                <h3 className="banner-staic__header">Have one to sell?</h3>
                <div className="btn black">Sell with us</div>
            <style jsx global>{bannerStaticSellWithUsStyles}</style>
        </div>
    }
};