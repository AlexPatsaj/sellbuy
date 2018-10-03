import React from "react";
import Link from 'next/link'
import dropdownStyles from '../../static/comp-styles/product/Dropdown.scss'
import {ICON_CONFIRM_WHITE} from '../static/Icons';

export default class Dropdown extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            opened: false,
            sortby: ''
        }
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
        console.log('I am: ', this.state.opened);
        this.setState({
           opened: !this.state.opened
        });
    }

    handleChoice = (choice) => {
        this.setState({sortby: choice, opened: false});
        if(typeof(this.props.callback) != 'undefined'){
            this.props.callback(choice);    
        }
        
    }

    render() {
        if(!this.props.options){
            console.log("trying to instanciate a dropdown without options "); 
            return <React.Fragment></React.Fragment>;
        }

    return  <div className={"normal-dropdown " + (this.state.opened ? 'dropdown-opened' : '')}
                            ref={ node => {this.node=node; }} onClick={this.open}>
                            <div className="dropdown__active">
                                <span className='normal-dropdown__selectedValue'>{this.state.sortby === '' ? this.props.default : this.state.sortby}</span>
                                <div className="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 13 8" enableBackground="new 0 0 13 8">
                                        <polygon points="6.5,8 0,0.8 1.1,0 6.5,6 11.9,0.1 13,0.9 "/>
                                    </svg>
                                </div>
                            </div>
                            <div className="dropdown__options ">
                                {
                                    this.props.options.map( (item,idx) => {
                                        return <div className={"dropdown__option" + (this.state.sortby === item ? ' active' : '')} onClick={()=>this.handleChoice(item)} key={"dropdownGEN"+idx}>
                                                   {item}
                                                    <div className="dropdown__confirm">
                                                        {ICON_CONFIRM_WHITE}
                                                    </div>
                                                </div>
                                    })
                                } 
                            </div>
            <style jsx global>{dropdownStyles}</style>
        </div>
    }
};