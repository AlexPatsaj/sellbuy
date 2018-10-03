import React from "react";
import headerStyles from '../../static/comp-styles/header/HeaderBannerStatic.scss'
/* components */
import Share from  '../general/Share'
import Like from  '../general/Like'
import {ICON_DISCOUNT_BADGE, ICON_ARROW_RIGHT} from '../static/Icons';

export default class HeaderBannerStatic extends React.Component {
    constructor(props) {
        super (props); 
        // this.state = {
        // }
    }

    componentDidMount(){
        let video = document.getElementsByTagName("video");
        if(video.length > 0 ){ 
            video[0].play();
        }
    }

    render() {
    return  <div className={(this.props.page === 'shop' ? "nopadding" : "")}>

                {/* um, probably, types of banners can be more, hmm
                    generally difference between them in picture used.
                    First banner can be used with fullwidth picture, 
                    second can be used with png ~400x400.
                */}

                { this.props.page === 'shop' ? 

                    <div className="header-banner type2">

                        {/* <div className="header-banner__discount-badge">
                            <div className="header-banner__discount-amount">
                                -20 <span>%</span>
                            </div>
                            {ICON_DISCOUNT_BADGE}
                        </div> */}

                       {/* <img src="../static/video/shop-headerWEB.gif" alt={'Sony Picture Perfect'}/> */}
                     
                        <video playsInline autoPlay muted loop poster="/static/images/shop-header.jpg">
                          <source src="/static/video/shop-headerWEB1.webm" type='video/webm;'/>
                          <source src="/static/video/shop-headerWEB1.mp4" type='video/mp4;'/>
                        </video>
                        
                        <div className="header-banner__info">
                            <div className='header-banner__infoInner'>
                                <h1 className="header-banner__info-h2">
                                    Pants {'&'} Shorts
                                </h1>
                                <div className="subheader">
                                    Emmett Wide-Leg Crop Pants in Greek Gold
                                </div>
                                <div className="btn invisible">SHOP NOW {ICON_ARROW_RIGHT}</div>
                                {/* <div className="header-banner__icons">
                                    <Like likes_number={92}/>
                                    <Share shares_number={34} horisontal={true}/>
                                </div> */}
                            </div>
                        </div>
                    {/*../static/images/header-banner-2.jpg*/}
                    </div>
                    :
                    <div className="header-banner">
                        <div className="header-banner__discount-badge">
                            <div className="header-banner__discount-amount">
                                -20 <span>%</span>
                            </div>
                            {ICON_DISCOUNT_BADGE}
                        </div>
                        <div className="header-banner__info">
                            <h1 className="header-banner__info-h2">
                                Windows Surface Pro v2
                            </h1>
                            <span className="header-banner__price">$999.99 <strike>$1399.99</strike></span>
                            <div className="btn">SHOP NOW</div>
                            <div className="header-banner__icons">
                                <Like likes_number={92}/>
                                <Share shares_number={34} horisontal={true}/>
                            </div>
                        </div>
                        <img src="../static/images/header-banner-1.jpg" alt={'Sony Picture Perfect'}/>
                    </div>
                    }
                <style jsx global>{headerStyles}</style>
            </div>;
            }
    };