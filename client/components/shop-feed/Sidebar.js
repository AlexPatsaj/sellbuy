import React from 'react'
import Link from 'next/link'
import sidebarStyles from '../../static/comp-styles/shop-feed/Sidebar.scss'
import {ICON_SEARCH} from '../static/Icons'; 
import Categories from  './Categories'
import HotDeals from  './HotDeals'

export default class Sidebar extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() { 
    	return <div className="sidebar">
                    <Categories/>
                    <HotDeals/>
                <style jsx global>{sidebarStyles}</style>
            </div>; 
    }
};

