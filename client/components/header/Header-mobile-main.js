import React from "react";

import mobileMenuStyles from '../../static/comp-styles/header/MobileMenuContent.scss'
import Link from 'next/link'

import { ICON_FLAG_UK, ICON_ARROW_DOWN } from '../static/Icons'; 

import { ModalManager} from 'react-dynamic-modal';
import SignInModal from '../general/SignInModal'; 
import User from '../../models/MidddlyUser'; 

export default class MobileMenuContent extends React.Component {
    constructor(props) {
        super (props); 

        this.state = {
            isLoggedIn : false
        }
    }

    componentDidMount(){
        this.setState({
            isLoggedIn : User.isLoggedIn()
        })
    }

    openSignIn( event ,tab) {
        event.preventDefault(); 
        this.props.closeMenu(); 
        ModalManager.open(<SignInModal tabToOpen={tab} onRequestClose={() => true}/>); 
    }

    _logout(){
        User.logout(); 
    }

    render() {
    	console.log(this.props.go2Cats);
    	return      <div className="hamburger-content__wrapper">
                        <div className="hamburger-content__vertical">
                            <ul className="hamburger-vertical-categories">
                                <li className="hamburger-menu__vertical-elements"><Link href="/deals"><a >Today's Deals</a></Link></li>
                                <li className="hamburger-menu__vertical-elements"><Link href="/nearby-deals"><a >Nearby Deals</a></Link></li>
                                <li className="hamburger-menu__vertical-elements"><Link href="/brands"><a >Brands</a></Link></li>
                                <li className="hamburger-menu__vertical-elements goto" onClick={() => this.props.goto(1)}>
                                	<Link href="#!">
                                		<a>
		                                Categories
		                                {ICON_ARROW_DOWN}
                                    	</a>            
                                	</Link>
                                </li>
                            </ul>
                            <hr/>
                            {  this.state.isLoggedIn &&  <React.Fragment>
                                    <ul className="hamburger-vertical-categories">
                                        <li className="hamburger-menu__vertical-elements"><Link href="/notifications"><a >Notifications</a></Link></li>
                                        <li className="hamburger-menu__vertical-elements"><Link href="/messages"><a >Messages<span className="mail-amount">1</span></a></Link></li>
                                        <li className="hamburger-menu__vertical-elements"><Link href="/summary"><a >Summary</a></Link></li>
                                        <li className="hamburger-menu__vertical-elements"><Link href="/recently-viewed"><a >Recently Viewed</a></Link></li>
                                        <li className="hamburger-menu__vertical-elements"><Link href="/bids-offers"><a >Bids/Offers</a></Link></li>
                                        <li className="hamburger-menu__vertical-elements"><Link href="/watch-list"><a >Watch List</a></Link></li>
                                        <li className="hamburger-menu__vertical-elements"><Link href="/purchase-history"><a >Purchase History</a></Link></li>
                                        <li className="hamburger-menu__vertical-elements"><Link href="/selling"><a >Selling</a></Link></li>
                                        <li className="hamburger-menu__vertical-elements"><Link href="/edit-profile"><a >Edit profile</a></Link></li>
                                        <li className="hamburger-menu__vertical-elements language-element">
                                            {ICON_FLAG_UK}
                                            English
                                        </li>
                                    </ul>
                                    <hr/>
                                    <ul className="hamburger-vertical-categories">
                                        <li className="hamburger-menu__vertical-elements" onClick={this._logout.bind(this)}>
                                        <Link href='#!'><a>Log Out</a></Link>
                                        </li>
                                    </ul>   
                                </React.Fragment>
                            }

                            { !this.state.isLoggedIn && 
                                <ul className="hamburger-vertical-categories">
                                    <li className="hamburger-menu__vertical-elements">
                                        <a  onClick={ (event) => { this.openSignIn(event,1); } }>Login</a>
                                    </li>
                                    <li className="hamburger-menu__vertical-elements">
                                        <a  onClick={ (event) => { this.openSignIn(event,0); } }>Register</a>
                                    </li>
                                </ul>
                            }
                        </div>
                    </div>   
    }
}