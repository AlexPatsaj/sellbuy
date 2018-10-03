import React from "react";
import Link from 'next/link'
import breadcrumbsStyles from '/static/comp-styles/general/Breadcrumbs.scss'
import {ICON_BREADCRUMB} from '../static/Icons'; 
export default class Breadcrumbs extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
    render() {
    return  <div className="breadcrumbs container">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-list__items"><Link href="/"><a>Home</a></Link></li>
                    <li className="breadcrumbs-list__items">{ICON_BREADCRUMB}</li>
                    <li className="breadcrumbs-list__items"><Link href="/"><a>Shopping</a></Link></li>
                    <li className="breadcrumbs-list__items">{ICON_BREADCRUMB}</li>
                    <li className="breadcrumbs-list__items">{this.props.title}</li>
                </ul>
            <style jsx global>{breadcrumbsStyles}</style>
        </div>
    }
};