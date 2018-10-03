import React from "react";
import searchDropdownStyles from '../../static/comp-styles/header/Header-Search.scss'

import Link from 'next/link'

export default class SearchDropdown extends React.Component {
    constructor(props) {
        super (props); 
        this.state = {
            active: 'Brands'
        }
    }

    handleClick = (elementOfMenu) => {
        this.setState({active: elementOfMenu})
    }

    render() {
    return  <div className="search-dropdown" onClick={()=>{this.props.dropdownOpen("search")}}>
                {this.state.active}
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 16 16" enableBackground="new 0 0 16 16">
                    <polygon points="12.3,3.8 3.8,12.2 12.3,12.2 	"/>
                </svg>
                <div className="search-dropdown-panel">
                        <ul className="search-dropdown-panel__items">
                            <li className={this.state.active === 'Items' ? "active": null} onClick={() => this.handleClick('Items')}>Items</li>
                            <li className={this.state.active === 'Stores' ? "active": null} onClick={() => this.handleClick('Stores')}>Stores</li>
                            <li className={this.state.active === 'Users' ? "active": null} onClick={() => this.handleClick('Users')}>Users</li>
                            <li className={this.state.active === 'Brands' ? "active": null} onClick={() => this.handleClick('Brands')}>Brands</li>
                        </ul>
                    </div>
                <style jsx>{searchDropdownStyles}</style>
            </div>;
        }
    };