import React from "react";
import bannerx1170x264 from '/static/comp-styles/offers/Bannerx1170x264.scss'

export default class Bannerx1170x264 extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
      render() {
        return <div className="banner-1170-264 container">
                    <img src="../static/images/static-banner.jpg" alt={'Sony Picture Perfect'}/>
                <style jsx>{bannerx1170x264}</style>
            </div>
        }
};