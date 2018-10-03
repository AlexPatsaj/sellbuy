import React from "react";
import Link from 'next/link'
import BannerStyles from '../../static/comp-styles/index/Banner.scss'
import {} from '../static/Icons'; 


export default class Banner extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
           
        }
    }

    render() {
    return  <div className="image-banner half">
               <img src={this.props.url} alt=""/>
            <style jsx global>{BannerStyles}</style>
        </div>
    }
};