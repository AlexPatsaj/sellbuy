import React from "react"
import dealsStyles from '../../static/comp-styles/shop-home/Deals.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Link from 'next/link'
import Deal from './Deal'

export default class Deals extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return <div className="deals container">
                <div className="view-all__header">
                    <h2>Deals</h2>
                    <span className="_view-all">View All</span>
                </div>
                <div className="flex-vcenter-jcsb">
                    <Deal/>
                    <Deal/>
                    <Deal/>
                </div>

            <style jsx global>{dealsStyles}</style>
        </div>
    }
};