import React from "react";

import subCategoriesStyles from '../../static/comp-styles/general/Subategories.scss'
import Link from 'next/link'

export default class Subategories extends React.Component {
    constructor(props) {
        super (props);
        // this.state = {
        // }
    }
    render() {
        return  <div  className="subcategories container">
                        <ul className="subcategories-list">
                            <li className="subcategories-list__item active"><Link href="/"><a>Featured</a></Link></li>
                            <li className="subcategories-list__item"><Link href="/"><a>Fashion</a></Link></li>
                            <li className="subcategories-list__item"><Link href="/"><a>Video Games</a></Link></li>
                            <li className="subcategories-list__item"><Link href="/"><a>Tech</a></Link></li>
                            <li className="subcategories-list__item"><Link href="/"><a>Home</a></Link></li>
                            <li className="subcategories-list__item"><Link href="/"><a>Fashion</a></Link></li>
                            <li className="subcategories-list__item"><Link href="/"><a>Video Games</a></Link></li>
                            <li className="subcategories-list__item"><Link href="/"><a>Tech</a></Link></li>
                            <li className="subcategories-list__item"><Link href="/"><a>Home</a></Link></li>
                        </ul>
                    <style jsx>{subCategoriesStyles}</style>
                </div>
        }
};