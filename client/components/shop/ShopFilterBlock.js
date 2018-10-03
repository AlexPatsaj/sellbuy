import React from "react";
import shopFilterStyles from '../../static/comp-styles/shop/ShopFilter.scss'
import {ICON_USER_ARROW, ICON_UI_TICK} from '../static/Icons'; 
 
import ReactDOM from 'react-dom'; 
import {ItemFiltersReducter} from '../../reducers/FilterItem';
import {setFilterAction} from '../../actions/FilterActions';
/**
*	Standard  filter block with checkboxes 
*/ 
export default class ShopFilters extends React.Component {
    constructor(props) {
    	super(props); 
    	this.state= { 
            opened: false,
            options: this.props.filter.options,
            nSelected: 0
        }; // we need to have the filters on state because we want the clear function to update the DOM 

        this.initialize(); 
    }

    initialize(){
        ItemFiltersReducter.subscribe(() => {
            let filters = ItemFiltersReducter.getState();  
            if(filters.setFilter =='%'){
                this.setState({
                    options: filters[this.props.filter.title],
                    nSelected:0
                });
            }
        });

        ItemFiltersReducter.dispatch(setFilterAction(this.props.filter.title, this.props.filter.options));//set initial state for this filter 
    }

    clearFilters(event){
        event.stopPropagation(); 
        event.preventDefault(); 

        this.state.options.forEach((filter) => {
            filter.selected = false; 
        }); 

        this.setState({
            'options': this.state.options,
            'nSelected':0
        });
    }

    changeFilter(id){ 
        console.log('change collection id ', id, this.props.filter, this.state.options);
        this.state.options.forEach((filter) => {
            if(filter.id == id ){
                this.state.nSelected += (filter.selected ? -1 :1 ); 
                filter.selected = !filter.selected; 
            }
        }); 

        this.setState({
            'options': this.state.options,
            'nSelected': this.state.nSelected
        }); 

        ItemFiltersReducter.dispatch(setFilterAction(this.props.filter.title, this.state.options));
    }

    render(){
        console.log(this.props.filter.title + " "+ this.state.nSelected);

    	return <div className={"shop-filter__block" + (this.state.opened ? ' opened':'')}>
            <hr/>
            <h4 className="shop-filter__top" onClick={() => { this.setState({'opened':!this.state.opened})}}>
                {this.props.filter.title}
               <span className="shop-filter__clear" onClick={(event) => {this.clearFilters(event); }}>
                { this.state.nSelected > 0 &&  "Clear" }
                </span>
               <span className="shop-filter__accordion-arrow">
                    {ICON_USER_ARROW}
                </span>
            </h4>
            
            <form>
                {
                this.state.options.map( (filter ,idx )=> {
                    return <div className="checkbox">
                        <input type="checkbox" name={filter.name} id={filter.name+filter.id} checked={filter.selected} onChange={ () => { this.changeFilter(filter.id); }}/>
                        <label htmlFor={filter.name+filter.id}>{filter.title}</label>
                        {ICON_UI_TICK}
                    </div>
                })
                }
            </form>
        </div>
    }
}