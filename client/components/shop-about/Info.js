import React from 'react'
import Link from 'next/link'
import infoStyles from '../../static/comp-styles/shop-about/Info.scss'
import {ICON_SEARCH} from '../static/Icons'; 

export default class Info extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() { 
    	return <div className="info">
                    <h3>Business Info</h3>
                    <p>Shop since 2010</p>
                    <p>One Person Company</p>
                <style jsx global>{infoStyles}</style>
            </div>; 
    }
};

