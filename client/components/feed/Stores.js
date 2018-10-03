import React from "react";
import Link from 'next/link'
import storesStyles from '../../static/comp-styles/feed/Stores.scss'
import {} from '../static/Icons'; 
import StorePreviewSmall from  './StorePreviewSmall'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default class Stores extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className={"feed-left__stores " + (this.props.mobile ? 'mobile' : '')}>
                <h3 className="feed-left__header">
                    Who to follow
                    <span className="see-more mobile-only">See More</span>
                </h3>
                <hr/>
                <div className="stores-wrapper">
                    <PerfectScrollbar>
                        <StorePreviewSmall />
                        <StorePreviewSmall /> 
                        <StorePreviewSmall />
                        <StorePreviewSmall /> 
                        <StorePreviewSmall />
                        <StorePreviewSmall /> 
                    </PerfectScrollbar>
                </div>
                <div className="see-more">
                    <div className="btn outline">See More</div>
                </div>
            <style jsx global>{storesStyles}</style>
        </div>
    }
};