import React from "react";
import Link from 'next/link'
import breadcrumbsStyles from '/static/comp-styles/general/Breadcrumbs.scss'
import {ICON_BREADCRUMB} from '../static/Icons'; 
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import ReportModal from "./ReportModal";

export default class Breadcrumbs extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    } 
    openModal = (e)=> {
        e.preventDefault();
        ModalManager.open(<ReportModal product={this.props.product} onRequestClose={() => true}/>);
    }
    render() {
    return  <div className="breadcrumbs container">
                <ul className="breadcrumbs-list">
                    <li className="breadcrumbs-list__items"><Link href="/"><a>Home</a></Link></li>
                    {/*  .active-category and .arrow-getback classes for mobile view */}
                    <li className="breadcrumbs-list__items arrow-getback">{ICON_BREADCRUMB}</li>
                    <li className="breadcrumbs-list__items active-category"><Link href="/"><a>Women's Clothing</a></Link></li>
                    <li className="breadcrumbs-list__items">{ICON_BREADCRUMB}</li>
                    <li className="breadcrumbs-list__items active-category"><Link href="/"><a>Swimwear</a></Link></li>
                    <li className="breadcrumbs-list__items">{ICON_BREADCRUMB}</li>
                    <li className="breadcrumbs-list__items">{this.props.title}</li>
                </ul>
                {/* <div className="report-item" >
                    <span onClick={this.openModal}>Report Item</span>
                </div> */}
            <style jsx global>{breadcrumbsStyles}</style>
        </div>
    }
};