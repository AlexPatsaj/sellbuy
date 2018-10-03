import React from "react"
import Link from 'next/link'
import dropdownAutosuggestStyles from '../../static/comp-styles/checkout/Dropdown-Autosuggest.scss'
import {ICON_UI_TICK} from '../static/Icons' 
import Autosuggest from 'react-autosuggest'
import PerfectScrollbar from 'react-perfect-scrollbar'

let currSave = {}; //a ref to the open save component 

const renderSuggestion = (suggestion) => { 
    return (
    <div className="save-widget__category">
        <div className="checkbox">
            <label htmlFor={suggestion.id}>{suggestion.name}</label>
        </div>
    </div>
    );
};

const renderSuggestionsContainer = ({ containerProps , children, query })  => { 
  
    return (<PerfectScrollbar> 
    <div {... containerProps}>

      {children} 
    </div> 
    </PerfectScrollbar>);
};


function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}


export default class DropdownAutosuggest extends React.Component {
    constructor(props) {
        super (props);

        console.log("drop down received ", props); 

        // this.handleClick = this.handleClick.bind(this);
        // this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.lists = props.options;
        this.sortby = ["Public", "Private"];
        this.state = {
            value: this.props.value, // this needs to be here.. or it won't update when the user selects something
            opened: false,
            sortby: 'Public',
            active: 'Brands',
            inputValue: '',  
            popupVisible: false, 
            newListShow: false, 
            newListName:'',
            newListPrivacy:'private',
            filteredLists : this.lists  //they are listening to state changes to trigger onsuggestionsfetchrequested 
        };   
        this.autoSuggestComponent={}; //a ref to the autoSuggestComponent
        this.currOption={}; // a ref to the suggestion node currently being hovered
    } 


    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
      };
    
      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };
    
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    getSuggestions(value) {
        if (value) {
           const escapedValue = escapeRegexCharacters(value.trim());
           
            if (escapedValue === '') {
                return [];
            }
         
            const regex = new RegExp('^' + escapedValue, 'i');
         
            return this.lists.filter( option => regex.test(option.name)); //where did you copy this code from.?? there is no "languages" attribute here 
        }
    } 
 
    /**
        * @param object suggestion
        * returns the value to be added on the text input 
    */ 
    getSuggestionValue(suggestion){
        return suggestion.name;    
    }

    render() {
    const inputProps = {
        placeholder: '',
        autoComplete: this.props.autoComplete, 
        name: this.props.name, /* In case we want to autocomplete work we can accept is a props*/ 
        required: true,
        value: this.state.value, //why not just call it what it is... it's the value the comp does not need to know what this means outside 
        onChange: (event,value) => { this.onChange(event, value)}         
    };

    return  <div className="dropdown-autosuggest">
                <Autosuggest
                    suggestions={this.state.filteredLists}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)} 
                    renderSuggestionsContainer={renderSuggestionsContainer}
                    renderSuggestion={renderSuggestion} 
                    getSuggestionValue={this.getSuggestionValue.bind(this)}
                    getSuggestions={this.getSuggestions.bind(this)}
                    inputProps={inputProps}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    ref={ ref =>  this.autoSuggestComponent = ref  }
                />  
            <style jsx global>{dropdownAutosuggestStyles}</style>
        </div>
    }
};