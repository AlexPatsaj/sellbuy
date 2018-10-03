import React from "react";
import Link from 'next/link'
import topBarStyles from '../../static/comp-styles/shop/TopBar.scss'
import {ICON_CONFIRM_WHITE} from '../static/Icons'; 

import Dropdown from '../general/Dropdown'; 

export default class TopBar extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            opened: false,
            sortby: 'Lowest Price'
        }

        this.sortby = ["Lowest Price", "Highest Rating","Nearest on Map"];
    }

    handleSortby = () => {
        console.log("It will be sorted");
    }

    handleClick() {   
        if (this.state.opened) { 
            document.addEventListener('click', this.handleOutsideClickS, false);
        } else { 
            document.removeEventListener('click', this.handleOutsideClickS, false);
        } 
    }

    handleOutsideClickS(e) { 
        if (this.node && this.node.contains(e.currentTarget) || this.node && this.node.contains(e.target)) {
          return;
        }
        this.handleClick(e);
    }

    open = () =>{
        this.setState({
           opened: !this.state.opened
        });
    }

    handleChoice = (choice) => {
        this.setState({sortby: choice, opened: false});
    }

    render() {
    return  <div className="topbar">
                {/* <ul className="topbar-list">
                    <li className="topbar-list__element active"><Link><a href="/">Products</a></Link></li>
                    <li className="topbar-list__element"><Link><a href="/">Sale Items</a></Link></li>
                    <li className="topbar-list__element"><Link><a href="/">New Arrivals</a></Link></li>
                    <li className="topbar-list__element"><Link><a href="/">Top Selling</a></Link></li>
                    <li className="topbar-list__element"><Link><a href="/">Offers</a></Link></li>
                </ul> */}
                <div className="topbar-misc">
                    <span className="topbar-found">
                        471 items found
                    </span>

                    <span className="topbar-sortby">
                        <Dropdown options={this.sortby} callback={this.handleChoice.bind(this)} default='Sort By'/> 
                    </span>
                </div>
            <style jsx global>{topBarStyles}</style>
        </div>
    }
};