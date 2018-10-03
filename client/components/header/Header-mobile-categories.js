import React from "react";

import mobileMenuStyles from '../../static/comp-styles/header/MobileMenuContent.scss'
import Link from 'next/link'
import {ICON_ARROW_DOWN} from '../static/Icons'

export default class MobileMenuContentCategories extends React.Component {
    constructor(props) {
        super (props); 
    }

    render( ) { 
    	  return  <div className="hamburger-content__wrapper hamburger-content__innerLevel"> 
                <div className="hamburger-content__vertical">
                    <div className="hamburger-content__getback" onClick={() => this.props.goto(this.props.prevLevel)} >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 13 8" enableBackground="new 0 0 13 8">
                            <polygon points="6.5,8 0,0.8 1.1,0 6.5,6 11.9,0.1 13,0.9 "/>
                        </svg>
                        <span className="hamburger-content__getback-text">{this.props.prevLevel == 0 ? 'Main menu' : 'Categories' }</span>
                    </div>
                    <ul className="hamburger-vertical-categories">

                        <li className="hamburger-menu__vertical-header">{this.props.prevLevel ==0 ? 'Categories': this.props.title}</li> 

                        { 
                        	this.props.categories.map((item,idx)=>{
                        		console.log('href',item.href);
                    			return <li className="hamburger-menu__vertical-elements" onClick={ !item.href  ? () => this.props.goto(2,idx) : undefined }>
                    				{ item.href != undefined && <Link href={`${item.href}`}><a className='subCategory'>{item.name}</a></Link>}
                                    { !item.href && <a href='#!' className='subCategory'>{item.name}</a>}
                                    { item.href === undefined && ICON_ARROW_DOWN }
                    			</li>
                    		})
                    	}
                    </ul>
                    
                </div>
            </div>	
    }
}