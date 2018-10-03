import React from 'react'
import Link from 'next/link'
import hotDealsStyles from '../../static/comp-styles/shop-feed/HotDeals.scss'
import {ICON_SEARCH} from '../static/Icons'; 
import Deal from './Deal'
export default class HotDeals extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() { 
    	return <div className="shop__hot-deals">
                    <h3>Hot deals
                        <Link href="/">
                            <a className="view-all">View all</a>
                        </Link>
                    </h3>
                    <Deal/>
                    <hr/>
                    <Deal/>
                    <hr/>
                    <Deal/>
                    <hr/>
                    <Deal/>
                    <hr/>
                    <Deal/>
                    <hr/>
                    <Deal/>
                <style jsx global>{hotDealsStyles}</style>
            </div>; 
    }
};

