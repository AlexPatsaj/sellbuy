import React from "react"
import paginationStyles from '../../static/comp-styles/general/Pagination.scss'
import {ICON_USER_ARROW} from '../static/Icons'; 
import Link from 'next/link'

export default class Pagination extends React.Component {
    constructor(props) {
        super (props);
    } 
    render() {
    return  <div className="pagination container">
                <ul className="pagintaion-wrapper">
                    <li className="pagination-element prev">{ICON_USER_ARROW}</li>
                    <li className="pagination-prev">Prev</li>
                    <li className="pagination-element number active">1</li>
                    <li className="pagination-element number"><Link href="/"><a>2</a></Link></li>
                    <li className="pagination-element number"><Link href="/"><a>3</a></Link></li>
                    <li className="pagination-element number"><Link href="/"><a>4</a></Link></li>
                    <li className="pagination-element number"><Link href="/"><a>5</a></Link></li>
                    <li className="pagination-next"><Link href="/"><a>Next</a></Link></li>
                    <li className="pagination-element next"><Link href="/"><a>{ICON_USER_ARROW}</a></Link></li>
                </ul>
            <style jsx global>{paginationStyles}</style>
        </div>
    }
};