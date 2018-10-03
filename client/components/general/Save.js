import React from "react";
import saveDropdownStyles from '../../static/comp-styles/general/Save.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import Autosuggest from 'react-autosuggest'
import Link from 'next/link'
import Dropdown from './Dropdown'
import {ICON_PRIVACY_PRIVATE,ICON_PRIVACY_PUBLIC, ICON_UI_TICK, ICON_CREATE_LIST,ICON_SAVE_LIST} from '../static/Icons'; 
import Midddly from '../../models/Midddly'; 
  
/* this is so got damn horrible it makes me shiver, but we need to keep a reference to the current component because if we preventDefault when 
we click a sugestion, we need to do it from a static method because of JSX... which also means we don't have access to this. 
as soon as they fix this we need to update jsx this is going to be a pain often. 
Here we can solve this by using a global variable that represents the currenctly open component 
we set it when it opens the dropdown 

Further since the sugestion is a deeply nested object changing it's properties won't trigger re-render...  

Am going to drop this to another day 
*/ 
let currSave = {}; //a ref to the open save component 

const renderSuggestion = (suggestion) => { 
    /* keep a ref to the element being hovered on mouseover, ref is used because when the user clicks the option, 
    this element is regenerated so the reference is lost, if he clicks again we want to update the new node generated 
    so we use ref for that, when the node is generated again, the ref function call will update the currOption value with the new element*/
    return (
    <div className="save-widget__category" 
    onClick={ event =>  Save.getSuggestionValue(event, suggestion)  } 
    onMouseOver={ event => { currSave.currOption = event.target; } }  
    ref = {(ref) =>{ console.log("ref " +suggestion.name +" " + suggestion.checked); currSave.currOption = ref; }  }
    >
        <div className="checkbox">
            <input type="checkbox" name="default" id={suggestion.id} checked={suggestion.checked}/>
            <label htmlFor={suggestion.id}>{suggestion.name}</label>
            {ICON_UI_TICK}
        </div>
        <div className="save-widget__category-type">
            {suggestion.isPrivate ? ICON_PRIVACY_PRIVATE : ICON_PRIVACY_PUBLIC }
        </div>
    </div>
    );
};

const renderSuggestionsContainer = ({ containerProps , children, query })  => { 
    //console.log('renderContainer ',query); 
    return (<PerfectScrollbar onClick={event  => Save.preventPropagation(event)}  > 
    <div {... containerProps}>

      {children} 
    </div> 
    </PerfectScrollbar>);
};
 
export default class Save extends React.Component {
    constructor(props) {
        super (props); 
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.lists =[];
        this.sortby = ["Public", "Private"];
        this.state = {
            opened: false,
            sortby: 'Public',
            active: 'Brands',
            inputValue: '',  
            popupVisible: false, 
            createNew: false, 
            newListName:'',
            newListPrivacy:'public',
            filteredLists : this.lists  //they are listening to state changes to trigger onsuggestionsfetchrequested 
        };   

        this.autoSuggestComponent={}; //a ref to the autoSuggestComponent
        this.currOption={}; // a ref to the suggestion node currently being hovered
    }

    /**
        * we want to close the component when the user clicks outside 
    **/
    handleClick() {   

        if (!this.state.popupVisible) {
            this.lists = Midddly.getMyListsForProduct(this.props.product_id) //refresh the lists , we may be adding new lists without reloading the page
            //this.setState({'filteredLists':this.lists,'newListShow':false});
            currSave = this; 
            document.addEventListener('click', this.handleOutsideClick, false);
            this.setState({"createNew":false, "newListName":""});
        } else { 
            
            this.setState({'filteredLists': this.lists });
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
    
        this.setState(prevState => ({
           popupVisible: !prevState.popupVisible,
        }));
    }
    
    handleOutsideClick(e) { 
        let target = e.target || e.currentTarget ; 
        //console.log('handleOutsideClick', e.currentTarget,e.target, target, target.id);
        if (this.node && this.node.contains(target)  || target.id=='newList' ) {
          return;
        }
        this.handleClick(e);
    }

    /** 
        * @param event 
        * prevent event from triggerting the onClick that closes the popup 
    */ 
    static preventPropagation(event){ 
        event.preventDefault();
        event.stopPropagation();
    }
    
    /*
        * the user wants to create a new list 
        * toDo: test this when the backend is done 
    */ 
    addList = () => {
        const newList= Midddly.addList(this.state.newListName, this.state.newListPrivacy.toLowerCase());
        newList.product_id = this.props.product_id; 
        newList.checked = true; 
        this.setState({"createNew":false});
        console.log("created new list ", this.state.newListName, this.state.newListPrivacy);
        Midddly.addProductToList(newList.id, this.props.product_id);  
    }

    /* 
        * return a filtered list of sugestions based on the user's input value 
    */
    getSuggestions(value){   

        console.log('get suggestions for value '+value); 
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length; 
        return inputLength === 0 ? this.lists : this.lists.filter(sugestion => sugestion.name.toLowerCase().slice(0, inputLength) === inputValue);
    };

    /*
        * when the user clicks a suggestion this function is called. 
        * we want to check if the product is there and if it is remove it, if not added 
        * @param selectedList - the list the user clicked on 
    */
    static getSuggestionValue(event , selectedList){ 
      //  console.log(event);
        if(selectedList.checked){
            Midddly.removeProductFromList(selectedList.id, selectedList.product_id); 
        }
        else {
            Midddly.addProductToList(selectedList.id , selectedList.product_id); 
        }
        selectedList.checked = !selectedList.checked;  
 
    /*** Fix the non updating of the status until the mouse leaves the check box **/  
        console.log('theobject',currSave.autoSuggestComponent);
        console.log('status in autosugest',currSave.autoSuggestComponent.autowhatever.props.items[0].checked);
        //currSave.autoSuggestComponent.onSuggestionMouseEnter({},currSave.currOption);
        currSave.autoSuggestComponent.resetHighlightedSuggestionOnMouseLeave();
    /*** / ***/
        
        Save.preventPropagation(event); 
        return selectedList.name; 
    }
  
    /*
        * @param string val the inputs value 
        * called on every input search change 
    */
    onInputSearchChange(event, changeObj){
        //console.log('onInputSearchChange' , changeObj );  
        this.setState ( { 'newListName': changeObj.newValue } ); 
    } 

    /*
        * @param string value - search input value 
        * Autosuggest will call this function every time you need to update suggestions.
    */
    onSuggestionsFetchRequested = ({ value }) => { 
        console.log('onSuggestionsFetchRequested' , value );
        
        const newListShow = value.length >0 && this.state.filteredLists.filter( (item) => { return value.toLowerCase() === item.name.toLowerCase() }).length==0 ;
 
        this.setState({
            filteredLists : this.getSuggestions(value),
            'newListShow' : newListShow
        });
    }; 
 
    open = () =>{
        this.setState({
           opened: !this.state.opened
        });
    }

    handleChoice = (choice) => {
        this.setState({sortby: choice, opened: false,"newListPrivacy": choice });
    }

    /*
        * opens the create list form 
    */
    createList(event){
        Save.preventPropagation(event); 

        this.setState({
            'createNew' : true
        });
    }   

    render() {  
        const inputProps = {
            placeholder: 'Search list here',
            value:this.state.newListName,
            onChange: this.onInputSearchChange.bind(this),
            onClick: (event) => Save.preventPropagation(event), 
        };

    return  <div className={this.state.popupVisible ? "save-widget save-widget-dropdown__opened" : "save-widget"} title="Save" ref={ node => {this.node=node; }}  onClick={this.handleClick.bind(this)}>
                <span>{ICON_SAVE_LIST}</span>

                { this.props.showStats  &&  '48'}
                <div className="save-widget__dropdown">
                    <h4 className="save-widget__h4">{this.state.createNew ? "Create New List": "Save To List"}</h4> 
                        <div className="save-widget__categories">
                         {/*   <div className="checkbox">
                                <input type="checkbox" name="id1" id="id1"/>
                                <label htmlFor="id1">For Travel</label>
                                {ICON_UI_TICK}
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="id2" id="id2"/>
                                <label htmlFor="id2">Fishing</label>
                                {ICON_UI_TICK}
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="id3" id="id3"/>
                                <label htmlFor="id3">For gym</label>
                                {ICON_UI_TICK}
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="Gifts" id="Gifts"/>
                                <label htmlFor="Gifts">Gifts</label>
                                {ICON_UI_TICK}
                            </div>
                            <p className="show-more">Show more</p> */
                        }
                           { /*** Only instance the AutoSugest when we are opening the popup, no need for the extra listeners until then */}

                           {  !this.state.createNew && <React.Fragment>
                             <Autosuggest
                                suggestions={this.state.filteredLists}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)} 
                                 renderSuggestionsContainer={renderSuggestionsContainer}
                                 renderSuggestion={renderSuggestion} 
                                 getSuggestionValue={Save.getSuggestionValue}
                                 inputProps={inputProps}
                                 alwaysRenderSuggestions={true}
                                 focusInputOnSuggestionClick={true}
                                 ref={ ref =>  this.autoSuggestComponent = ref  }/>


                                <div className="save-widget__new-list" id='newList' onClick={this.addList} onClick={(event) => { this.createList(event); }}>
                                    {ICON_CREATE_LIST}  Create new list
                                    {/* "{this.state.newListName}" */}
                                </div>
                                </React.Fragment>
                           } 
                        </div>                 
                  
                    <div className='save-widget__new-list-step2 '> 
                        {/* <form>
                            <div 
                                onClick={(event)=>{ this.setNewListPrivacy(event,'public');}} 
                                className={"sate-widget__step2-option "+ (this.state.newListPrivacy == 'public' ? 'selected': '')}>
                                <input type="radio" name="1" id="Public"  checked={this.state.newListPrivacy == "public"}/>
                                <label htmlFor="Public">Public <span>Anyone can search and view</span></label>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13">
                                    <title>Select category</title>
                                    <path d="M4.5,11.5L0,7.2l1.4-1.4l3.1,2.9l7.1-7.3L13,2.9C13.1,2.9,4.5,11.5,4.5,11.5z"/>
                                </svg>
                                <div className="step-option__wrapper">
                                    {ICON_PRIVACY_PUBLIC}
                                </div>
                            </div> 
                            <div 
                                onClick={(event)=>{ this.setNewListPrivacy(event,'private');}} 
                                className={"sate-widget__step2-option "+ (this.state.newListPrivacy == 'private' ? 'selected': '')}>
                                <input type="radio" name="1" id="Private"  checked={this.state.newListPrivacy == "private"} />
                                <label htmlFor="Private">Private <span>Anyone with link can view</span></label>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13">
                                    <title>Select category</title>
                                    <path d="M4.5,11.5L0,7.2l1.4-1.4l3.1,2.9l7.1-7.3L13,2.9C13.1,2.9,4.5,11.5,4.5,11.5z"/>
                                </svg>
                                <div className="step-option__wrapper">
                                    {ICON_PRIVACY_PRIVATE}
                                </div> 
                            </div>
                        </form> */}
                        { this.state.createNew && 
                        <form onSubmit={this.addList}  onClick={ (event) =>{ Save.preventPropagation(event);}}>
                            <div className="playlist-input">
                                <label htmlFor="list_name">Name</label>
                                <input type="text"  id="list_name" name="list_name" onChange={(event)=>{ this.setState({ 'newListName':event.target.value }); } } placeholder="Enter List Name" required pattern="^\d{5,6}(?:[-\s]\d{4})?$"/>
                            </div>
                            <div className="playlist-input">
                                <label>Privacy</label>
                                <Dropdown options={this.sortby} callback={this.handleChoice.bind(this)} default='Public' />
                            </div>
                            <button className="btn" onClick={ this.addList.bind(this)}>Create</button>
                        </form>
                        }
                    </div>
                </div>
                <style jsx global>{saveDropdownStyles}</style>
            </div>;
        }
    }; 