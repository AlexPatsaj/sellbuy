import React from 'react'
import Link from 'next/link'
import categoriesStyles from '../../static/comp-styles/shop-feed/Categories.scss'
import {ICON_SEARCH} from '../static/Icons'; 

export default class Categories extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() { 
    	return <div className="categories">
                    <h3>Categories</h3>
                    <ul className="categories-list">
                        <li className="category">
                            <Link href=""><a>Clothing</a></Link>
                        </li>
                        <li className="category">
                            <Link href=""><a>Shoes</a></Link>
                        </li>
                        <li className="category">
                            <Link href=""><a>Bags</a></Link>
                        </li>
                        <li className="category">
                            <Link href=""><a>Jewelry</a></Link>
                        </li>
                    </ul>
                <style jsx global>{categoriesStyles}</style>
            </div>; 
    }
};

