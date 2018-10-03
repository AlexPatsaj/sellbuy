import React from "react";
import Link from 'next/link';
import Router from 'next/router'
import headerStyles from '../../static/comp-styles/header/Header.scss';
//Components
import Categories from  './Header-Categories';
import SearchDropdown from  './Header-SearchDropdown';
import Notifications from  './Header-Notifications';
import Mail from  './Header-Mail';
import HeaderUser from  './Header-User';
import Basket from  './Header-Basket';
import Language from  './Header-Language';
import Login from './Header-Login';

import MobileMenuContent from  './Mobile-Menu-Content';

/* SVGs */
import {ICON_SEARCH, MIDDDLY_LOGO} from '../static/Icons'; 
import MidddlyInterface from '../../models/MidddlyInterface';
import Midddly from '../../models/Midddly'; 
import User from '../../models/MidddlyUser'; 

/** 
Let's use a this.props.page to denote the selected page, we might want to do 
something else with this in the hamburguer for ex. 
we don't want to have seperate properties for each page . :P 
**/ 
export default class Header extends React.Component {
    constructor(props) {
        super (props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            expanded: false,
            mobileSearch: false,
            userOpenedOnMobile: false,
            scrolled: false,
            'signed':false
        }; 
    }
  
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('click', this.handleClick);
        window.addEventListener('scroll', this.handleScroll);

        MidddlyInterface.setMobile(window.innerWidth < 768); 
        
        this.setState({
            'signed' : User.isLoggedIn()
        });    
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('click', this.handleClick);
        window.removeEventListener('scroll', this.handleScroll);
    } 
    
    handleScroll = (event) => {
        console.log("Handle Scroll  "+this.state.expanded);

        if(this.state.expanded){
            return; 
        }

        if (window.scrollY <= 110 && this.state.scrolled === true) {
            this.setState({scrolled: false});
        }
        else if (window.scrollY >= 110 && this.state.scrolled !== true) {
            this.setState({scrolled: true});
        }
    };

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && window.innerWidth <= 1080) {
            this.setState({
                expanded: false
            })
        }
    }

    // handleClick = (e) => {
    //     console.log(this.drop.contains(e.target), this.node.contains(e.target));
    //     if (this.drop.contains(e.target)) {
    //         console.log("object1");
    //         return null;
    //     } 
    //     else if (this.node.contains(e.target)) {
    //         console.log("object2");
    //         this.props.dropdownOpen("notifications", e, "")
    //     } 
        
    //     else if (this.drop.contains(e.target) === false && this.node.contains(e.target) === false ) {
    //         console.log("object3");
    //         this.props.dropdownOpen("")
    //     }
    // }

    handleSearchButton = () => {
        if (window.innerWidth <= 640 && this.state.mobileSearch === false) {
            this.setState({
                mobileSearch: true
            })
        } else {
            this.setState({
                mobileSearch: false
            })
        }
        Router.push('/search');
    }

    /** this is a class function why was it declared with an arrow function syntax?  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions 
    Also.. for reasons entirely unknown to me... but probably related to this flex layout manager... when you click the icon.. instead of the target being the icon.. it's the parent. 
    So we need to attach the event to the parent.. else the open menu is not triggered. This only happens on certain resolutions on desktop. 
    */ 
    handleOpenMenu(event){ 
        
        if (this.state.expanded === true) {
            this.setState({
                expanded: false,
            })
            document.body.classList.remove('mobile-menu-opened');
        }
        else {
            this.setState({
                expanded: true,
                scrolled: false
            })
            document.body.classList.add('mobile-menu-opened');
        }
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }


    searchHandleFocus = () => {
        if (window.innerWidth >= 480 && window.innerWidth >= 480 && this.state.mobileSearch === false) {
            this.setState({
                mobileSearch: true
            })
        } 
    }

    searchHandleBlur = () => {
        this.setState({
            mobileSearch: false
        })
    } 

    render() {
        console.log('header props ', this.props);
        const {dropdownOpened} = this.state;
        return  <header ref={this.setWrapperRef} className={this.state.expanded ? "mobile-opened" : null}>  
                    <div className={this.state.scrolled  ? "header-menu scrolled" : "header-menu"}>
                        <div className="menu-box-shadow">
                            <div className="container">
                                <div className="logo">
                                    <div className="hamburger-menu mobile-hamburger">
                                        <span className="icon-bar"
                                         ref={ (iconMenu) => { this.iconMenu = iconMenu; } }
                                         onClick={(event) =>{ this.handleOpenMenu(event) }}></span>
                                        <div className="hamburger-menu__less-640">
                                            <ul className="hamburger-menu__horisontal-categories">
                                                <li className="hamburger-menu__horisontal-elements"><Link href=""><a>Home</a></Link></li>
                                                <li className="hamburger-menu__horisontal-elements"><Link href="/orders"><a>Orders</a></Link></li>
                                                <li className="hamburger-menu__horisontal-elements"><Link href="/lists"><a >Lists</a></Link></li>
                                            </ul>
                                            <MobileMenuContent closeMenu={(event) => { this.handleOpenMenu(event) }}/>
                                        </div>
                                        <div className="mobile-background"  onClick={(event) =>{  this.handleOpenMenu(event); }}></div>
                                    </div>
                                    <Link href='/'><a>{MIDDDLY_LOGO}</a></Link>
                                </div>
                                <div className={this.state.mobileSearch ? "search mobile-search" : "search" }>
                                    <input className="search-input" value={this.props.value} onChange={(e) => this.props.changeGlobalFilter(e.target.value)} type="text" name="search" placeholder="How can we help you today?"  onFocus={() => this.dropdownOpen("search", event, "focused")}/>
                                    <input className="search-input-mobile" onFocus={this.searchHandleFocus}  type="text" name="search" placeholder="SEARCH"/>
                                    <div className="search-mobile-x" onClick={this.handleSearchButton}>×</div>
                                    <SearchDropdown opened={dropdownOpened}/>
                                    <button className="search-btn" onClick={this.handleSearchButton}>
                                    {ICON_SEARCH}
                                    </button>
                                </div>
                                <nav className="top">
                                    <ul className="top-menu">
                                        <li className={ "top-menu__element " + (this.props.mobileScrolled  || this.props.marketplace ? 'active' : "")}><Link href="/"><a><strong>Marketplace</strong></a></Link></li>
                                        <li className={"top-menu__element " + (this.props.feed ? 'active' : "")}><Link href="/feed"><a>Feed</a></Link></li>
                                    </ul>
                                </nav>
                                <div className="top-buttons">
                                
                                    <div className="user-related">
                                        { this.state.signed && 
                                            <React.Fragment>
                                                <Notifications/>
                                                <Mail/>
                                                <HeaderUser/>
                                            </React.Fragment>
                                        }

                                        {!this.state.signed && <Login/> }
                                    </div>

                                    <div className="site-related">
                                        <Basket/>
                                        <Language/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Categories show={this.props.show} page={this.props.page}/>
                    </div>
                    <style jsx global>{headerStyles}</style>
                </header>
        }
};