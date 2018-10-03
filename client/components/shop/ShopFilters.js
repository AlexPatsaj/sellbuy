import React from "react";
import shopFilterStyles from '../../static/comp-styles/shop/ShopFilter.scss'
import {ICON_USER_ARROW, ICON_UI_TICK} from '../static/Icons'; 
import Dropdown from  '../general/Dropdown'

/* https://github.com/davidchin/react-input-range */
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
 
import ShopFilterBlock from './ShopFilterBlock'; 

import {ItemFiltersReducter} from '../../reducers/FilterItem'; 
import {clearAllAction,setFilterAction} from '../../actions/FilterActions';

export default class ShopFilters extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            priceRange: { min: 0, max: 1000 },
            priceOpened : false,
            sortby: 'Lowest Price',
            'filters': [
                { 'title': 'Department', 
                  options: [
                    {'id':1,name:'Department',title:'Fashion & Accessories'},
                    {'id':2,name:'Department',title:'Others'}
                  ]
                },
                {
                    'title': 'Category',
                    options: [
                        {'id':1,name:'Category',title:"Women\'s Accessories"},
                        {'id':2,name:'Category',title:"Women\'s Fashion"}
                    ]
                },
                {
                    'title': 'Products',
                    options: [
                        {'id':1,name:'Products',title:'Jewellery'},
                        {'id':2,name:'Products',title:'Dresses'}
                    ]
                },
                {
                    'title': 'Brands',
                    options: [
                        {'id':1,name:'Brands',title:'Zara'},
                        {'id':2,name:'Brands',title:'Gucci'},
                        {'id':3,name:'Brands',title:'Sacoor'}
                    ]
                },
                {
                    'title': 'Collections',
                    options: [
                        {'id':1,name:'Summer',title:'Zara'},
                        {'id':2,name:'Winter',title:'Gucci'},
                        {'id':3,name:'Party',title:'Sacoor'}
                    ]
                },
                {
                    'title': 'Sale',
                    options: [
                        {'id':1,name:'Sale',title:'All'},
                        {'id':2,name:'Sale',title:'Sale item'},
                        {'id':3,name:'Sale',title:'New Arrivals'},
                        {'id':4,name:'Sale',title:'Top Selling'},
                        {'id':5,name:'Sale',title:'Offers'},
                    ]
                }

            ]
        };
        this.sortby = ["Lowest Price", "Highest Rating","Nearest on Map"];

        ItemFiltersReducter.subscribe(() => {
            let filters = ItemFiltersReducter.getState(); 
            if(filters.setFilter == '%'){
                this.state.priceRange = filters.priceRange; 
            }

            this.setState({
                'nSelected' : filters.nSelected,
                'priceRange' : this.state.priceRange
            }); 
        }); 
        
        ItemFiltersReducter.dispatch(setFilterAction('priceRange', this.state.priceRange)); 
    } 

    clearPrice(event){
        event.preventDefault(); 
        event.stopPropagation(); 

        this.setState({
            'priceRange': { min: 0, max: 1000 }
        });
    }

    handleChoice = (choice) => {
        this.setState({sortby: choice, opened: false});
    }

    setPriceRange(value){ 
        this.setState({ 'priceRange': value }); 
    }

    clearAll(){
        ItemFiltersReducter.dispatch(clearAllAction());
    }

    render() {
    return  <div className="shop-filter  sticky">
                <div className="sort-wrapper mobile-only">
                    {/* <h3 className="sort-header">
                        Sort 
                        <span className="sort-header__mobile-arrow">
                            {ICON_USER_ARROW}
                        </span>
                    </h3> */}
                    <div className="sort-dropdown">
                        <Dropdown options={this.sortby} callback={this.handleChoice.bind(this)} default={this.state.sortby}/>
                    </div>
                </div>
                <div className="filter-wrapper">
                    <h3 className="shop-filter__header">
                        Filters 
                        {/* <span className="shop-filter__mobile-arrow">
                            {ICON_USER_ARROW}
                        </span> */}
                        {this.state.nSelected > 0 && <span className='shop-filter__clearAll' onClick={this.clearAll.bind(this)}> Clear All </span> }
                    </h3>
                    <div className="shop-filter__blocks-wrapper">
                        { 
                            this.state.filters.map((item,idx) => {
                            return <ShopFilterBlock filter={item} key={"filter"+idx}/>  
                            })
                        } 
                        
                        <div className={"shop-filter__block range " + (this.state.priceOpened ? ' opened ' : '') }>
                            <hr/>
                            <h4 className="shop-filter__top" onClick={ () => { this.setState({ "priceOpened": !this.state.priceOpened });  }}>
                                Price
                                <span className="shop-filter__clear" onClick={(event) => {this.clearPrice(event); }}>
                                   { (this.state.priceRange.min != 0 || this.state.priceRange.max != 1000 ) && "Reset"}
                                </span> 
                                <span className="shop-filter__accordion-arrow">
                                    {ICON_USER_ARROW}
                                </span>
                            </h4>
                            
                            <form className="range-filter">
                                <InputRange
                                maxValue={1000}
                                step={10}
                                minValue={0}
                                value={this.state.priceRange}
                                onChange={value => { this.setPriceRange(value);}} />
                            </form>
                        </div>
                    </div>
                    <div className="mobile-bg">
                        <div className="filter-close">
                            ×
                        </div>
                    </div>
                </div>
            <style jsx global>{shopFilterStyles}</style>
        </div>
    }
};