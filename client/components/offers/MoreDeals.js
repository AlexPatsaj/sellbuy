import React from "react";
import moreDeals from '../../static/comp-styles/offers/MoreDeals.scss'
import Deal from  './Deal'

export default class MoreDeals extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        //     rating: 4
        // }
    }
    render() {
        return <div className="more-deals container">
                    <h2>MORE DEALS</h2>
                    <div className="more-deals__blocks">
                        <Deal/>
                        <Deal/>
                        <Deal/>
                        <Deal/>
                        <Deal/>
                        <Deal/>
                        <Deal/>
                        <Deal/>
                        <Deal/>
                    </div>
                    <style jsx global>{moreDeals}</style>
                </div>
        }
};