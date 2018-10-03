import React from "react";

import categoriesStyles from '../../static/comp-styles/header/Header-Categories.scss'
import Link from 'next/link'
// import PerfectScrollbar from 'react-perfect-scrollbar'

import {ICON_DROPDOWN_ARROW} from '../static/Icons'; 

export default class Categories extends React.Component {
    constructor(props) {
        super (props);
        // this.handleClick = this.handleClick.bind(this);
        // this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.state = {
            mobile: this.props.mobile,
            show: this.props.show,
            menuVisible: false
        }
    }

// handleClick() {
//     console.log(1);
//     if (!this.state.menuVisible) {
//         // attach/remove event handler
//         document.addEventListener('click', this.handleOutsideClick, false);
//     } else {
//         document.removeEventListener('click', this.handleOutsideClick, false);
//     }

//     this.setState(prevState => ({
//         menuVisible: !prevState.menuVisible,
//     }));
// }

// handleOutsideClick(e) {
//     console.log(2);
//     // ignore clicks on the component itself
//     if (this.node.contains(e.currentTarget) || this.node.contains(e.target)) {
//         return;
//     }
//     this.handleClick();
// }

render() {  
    return  <div className={this.state.mobile ? "container mobile-categories" : "categories container"}>
                {/* <PerfectScrollbar> */}
                    <nav className={this.state.show ? "categories-wrapper" : "categories-hidden"}>
                        <ul className="categories-list">
                            <li className="categories-list__item " ref={node => {this.node=node; }}  onClick={this.handleClick}>
                                <span className="categories-list__item-wrapper">
                                    Categories
                                    {ICON_DROPDOWN_ARROW}
                                </span> 
                                <div className="categories-dropdown container">
                                    <div className="dropdown-triangle-up">▲</div>
                                    <ul className="categories-dropdown__column">
                                        <li className="categories-dropdown__category-header"><h3>Clothing</h3></li>
                                        <li className="categories-dropdown__category">Sportswear</li>
                                        <li className="categories-dropdown__category">Dresses</li>
                                        <li className="categories-dropdown__category">Sandals</li>
                                        <li className="categories-dropdown__category">Women's Tops</li>
                                        <li className="categories-dropdown__category">Athletic Shoes</li>
                                        <li className="categories-dropdown__category">Watches</li>
                                        <li className="categories-dropdown__category">Eyewear</li>
                                        <li className="categories-dropdown__category">Jewellery</li>
                                        <li className="categories-dropdown__category">Books</li>
                                        <li className="categories-dropdown__category">Sportswear</li>
                                        <li className="categories-dropdown__category">Dresses</li>
                                        <li className="categories-dropdown__category">Sandals</li>
                                    </ul>
                                    <ul className="categories-dropdown__column">
                                        <li className="categories-dropdown__category-header"><h3>Electronics</h3></li>
                                        <li className="categories-dropdown__category">Sportswear</li>
                                        <li className="categories-dropdown__category">Dresses</li>
                                        <li className="categories-dropdown__category">Sandals</li>
                                        <li className="categories-dropdown__category">Women's Tops</li>
                                        <li className="categories-dropdown__category">Athletic Shoes</li>
                                        <li className="categories-dropdown__category">Watches</li>
                                        <li className="categories-dropdown__category">Books</li>
                                        <li className="categories-dropdown__category">Sportswear</li>
                                        <li className="categories-dropdown__category">Sandals</li>
                                        <li className="categories-dropdown__category">Women's Tops</li>
                                        <li className="categories-dropdown__category">Athletic Shoes</li>
                                    </ul>
                                    <ul className="categories-dropdown__column">
                                        <li className="categories-dropdown__category-header"><h3>Fitness</h3></li>
                                        <li className="categories-dropdown__category">Sportswear</li>
                                        <li className="categories-dropdown__category">Dresses</li>
                                        <li className="categories-dropdown__category">Sandals</li>
                                        <li className="categories-dropdown__category">Women's Tops</li>
                                        <li className="categories-dropdown__category">Watches</li>
                                        <li className="categories-dropdown__category">Eyewear</li>
                                        <li className="categories-dropdown__category">Jewellery</li>
                                        <li className="categories-dropdown__category">Books</li>
                                        <li className="categories-dropdown__category">Sportswear</li>
                                        <li className="categories-dropdown__category">Dresses</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="categories-list__item"><Link href="/"><a>Home</a></Link></li>
                            <li className={"categories-list__item" + (this.props.page=='deals' ? " active" : "")}><Link href="/deals"><a>Deals</a></Link></li>
                            <li className={"categories-list__item" + (this.props.page=='brands' ? " active" : "")}><Link href="/"><a>Brands</a></Link></li>
                            <li className={"categories-list__item" + (this.props.page=='nearby-stores' ? " active" : "")}><Link href="/"><a>Nearby Stores</a></Link></li>
                            <li className="categories-list__item btn"><Link href="/"><a>Sell with us!</a></Link></li>
                        </ul>
                    </nav>
                {/* </PerfectScrollbar> */}
                <style jsx global>{categoriesStyles}</style>
            </div>
    }
};