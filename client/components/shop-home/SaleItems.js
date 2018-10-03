import React from "react"
import saleItemsStyles from '../../static/comp-styles/shop-home/SaleItems.scss'
import SaleItem from './SaleItem'

export default class SaleItems extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return <div className="sale-items container">
                <div className="view-all__header">
                    <h2>Sale items</h2>
                    <span className="_view-all">View All</span>
                </div>
                <div className="sale-items_wrapper flex-vstart-jcsb">
                    <SaleItem/>
                    <SaleItem/>
                    <SaleItem/>
                    <SaleItem/>
                </div>
            <style jsx global>{saleItemsStyles}</style>
        </div>
    }
};