import React from "react";

import footerStyles from '/static/comp-styles/general/Footer.scss'
import Link from 'next/link'; 

import {ICON_ARROW_DOWN, ICON_APPLE_STORE, ICON_GOOGLE_STORE,ICON_SOCIAL_FACEBOOK,ICON_SOCIAL_INSTAGRAM,ICON_SOCIAL_LINKEDIN,ICON_SOCIAL_PINTEREST,ICON_SOCIAL_TWITTER,ICON_CIRCLE_FLAG_BH,ICON_CIRCLE_FLAG_AE,ICON_CIRCLE_FLAG_SA} from '../static/Icons'; 

export default class Footer extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            about: false,
            seller: false,
            howto: false,
            help: false
        }
    }
    
    accordionOpen = (param) => {
        param === 'about' ? this.setState({about:!this.state.about}): null;
        param === 'seller' ? this.setState({seller:!this.state.seller}): null;
        param === 'howto' ? this.setState({howto:!this.state.howto}): null;
        param === 'help' ? this.setState({help:!this.state.help}): null;
    }

    render() { 
    const About = () => {
        return <div className={"footer-menu__list" + (this.state.about ? ' opened' : '')}>
            <h4 onClick={()=>{this.accordionOpen('about')}}>About
            <span className="footer-arrow mobile-only">{ICON_ARROW_DOWN}</span>
            </h4>
            <ul className="footer-menu__list-items">
                <li><Link href="/offers"><a>How to Shop</a></Link></li>
                <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                <li><Link href="/offers"><a>FAQ</a></Link></li>
            </ul>
        </div>
    }
    const Seller = () => {
        return <div className={"footer-menu__list" + (this.state.seller ? ' opened' : '')}>
            <h4 onClick={()=>{this.accordionOpen('seller')}}>Seller
            <span className="footer-arrow mobile-only">{ICON_ARROW_DOWN}</span>
            </h4>
            <ul className="footer-menu__list-items">
                <li><Link href="/offers"><a>Register as a Seller</a></Link></li>
                <li><Link href="/offers"><a>Privacy Policy</a></Link></li>
            </ul>
        </div>
    }
    const Howto = () => {
        return <div className={"footer-menu__list" + (this.state.howto ? ' opened' : '')}>
            <h4 onClick={()=>{this.accordionOpen('howto')}}>Howto
            <span className="footer-arrow mobile-only">{ICON_ARROW_DOWN}</span>
            </h4>
            <ul className="footer-menu__list-items">
                <li><Link href="/offers"><a>About Us</a></Link></li>
                <li><Link href="/careers"><a>Careers</a></Link></li>
                <li><Link href="/offers"><a>How It Works</a></Link></li>
                <li><Link href="/offers"><a>Media</a></Link></li>
                <li><Link href="/offers"><a>Terms and Conditions</a></Link></li>
                <li><Link href="/offers"><a>Returns</a></Link></li>
            </ul>
        </div>
    }
    const Help = () => {
        return <div className={"footer-menu__list" + (this.state.help ? ' opened' : '')}>
            <h4 onClick={()=>{this.accordionOpen('help')}}>Help
            <span className="footer-arrow mobile-only">{ICON_ARROW_DOWN}</span>
            </h4>
            <ul className="footer-menu__list-items">
                <li><Link href="/offers"><a>About Us</a></Link></li>
                <li><Link href="/offers"><a>Careers</a></Link></li>
                <li><Link href="/offers"><a>How It Works</a></Link></li>
                <li><Link href="/offers"><a>Media</a></Link></li>
                <li><Link href="/offers"><a>Terms and Conditions</a></Link></li>
                <li><Link href="/offers"><a>Returns</a></Link></li>
            </ul>
        </div>
    }
        return  <footer id='footer'>
                        <div className="footer-menu">
                            <div className="container">
                                <div className="footer-menu__lists">
                                    <About/>
                                    <Seller/>
                                    <Howto/>
                                    <Help/>
                                </div>
                                <div className="subscription-input mobile-only">
                                    <input type="email" name="email" placeholder="Type your e-mail address" required/>
                                    <button className="btn">SUBSCRIBE</button>
                                </div>
                                <div className="footer-menu__misc">
                                    <h4>DOWNLOAD APPLICATION</h4>
                                    <div className="footer-menu__apps">
                                        <a href="https://www.apple.com/ru/ios/app-store/">
                                           {ICON_APPLE_STORE}
                                        </a>
                                        <a href="https://play.google.com/store?hl=ru">
                                            {ICON_GOOGLE_STORE}
                                        </a>
                                    </div>
                                    <h4>FOLLOW US ON SOCIAL MEDIA</h4>
                                    <div className="footer-menu__socials">
                                        <a href="htts://facebook.com">
                                            {ICON_SOCIAL_FACEBOOK}
                                        </a>
                                        <a href="htts://instagram.com">
                                            {ICON_SOCIAL_INSTAGRAM}
                                        </a>
                                        <a href="htts://linkedin.com">
                                            {ICON_SOCIAL_LINKEDIN}
                                        </a>
                                        <a href="htts://pinterest.com">
                                            {ICON_SOCIAL_PINTEREST}
                                        </a>
                                        <a href="htts://twitter.com">
                                            {ICON_SOCIAL_TWITTER}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <div className="container">
                                <h4>COUNTRIES</h4>
                                <div className="footer-bottom__flags">
                                    <div className="footer-bottom__country">
                                        {ICON_CIRCLE_FLAG_BH}
                                        Bahrain
                                    </div>
                                    <div className="footer-bottom__country">
                                        {ICON_CIRCLE_FLAG_AE}
                                        United Arab Emirates
                                    </div>
                                    <div className="footer-bottom__country">
                                        {ICON_CIRCLE_FLAG_SA}
                                        Saudi Arabia
                                    </div>
                                </div>
                                <p className="footer-bottom__copyright">Copyright © 2017 Midddly. All Rights Reserved</p>
                            </div>
                        </div>
                    
                    <style jsx global>{footerStyles}</style>
                </footer>
        }
    };