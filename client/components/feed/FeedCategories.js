import React from "react";
import Link from 'next/link'
import feedCategoriestyles from '/static/comp-styles/feed/FeedCategories.scss'
import {ICON_DROPDOWN_ARROW} from '../static/Icons'; 

import MidddlyInterface from '../../models/MidddlyInterface';
/**
Your issue with the outside click event has to do with the "this" that is passed to the function. 
this is associated with the context in which you are running your function, 
Since the event is generated outside this component somewhere in the window,  the context is lost, 
if you ever want to find out what context is that,  just do a console.log(this); inside the function. 

When you pass a function by param, such as you're doing when you're setting a property of an element to it
if you do  myfunction.bind(this), they your are telling js: Hey! when you run this function, make sure your run 
it with context=this. 
You could potencially pass any other context depending on your needs, maybe you are invocking another objects function, 
and that function uses a this reference, then you should bind to that object's context instead. 

what is this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this 
scope vs context: http://ryanmorr.com/understanding-scope-and-context-in-javascript/  
when .bind(this) https://medium.com/shoutem/react-to-bind-or-not-to-bind-7bf58327e22a


The dropdown was not opening and closing because the transition was not being triggered, despite the class chages, this
I can not for the life of me explain, probably some chrome bug. 
*/ 
export default class FeedCategories extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            active: 'All',
            opened: false
        } 
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

    open(){
        console.log('I am: ', this.state.opened);
        this.setState({
           opened: !this.state.opened
        });
        console.log(this.state.opened);
    }

    handleChoice (choice){
        this.setState({active: choice, opened: false});
    }

    render() { 

    return  this.props.categories ?  <div className="feed-categories" ref={ node => {this.node=node; }} onClick={this.handleClick.bind(this)}>
                <ul className="feed-categories-list">
                   {MidddlyInterface.isMobile && <li className="feed-categories-item active" onClick={this.open.bind(this)}>
                        {this.state.active}
                        {ICON_DROPDOWN_ARROW}
                    </li>
                    }
                    <span className={"dropdown-feed__categories " + (this.state.opened ? 'opened' : '')}>
                        {this.props.categories.map( (item,idx) => {
                            return  <li className={"feed-categories-item " +  (this.state.active == item ? 'active' : '') } onClick={()=>this.handleChoice(item)} key={"feed-item"+idx}>{item} 
                        </li>
                        })}                         
                    </span>
                </ul>
            <style jsx global>{feedCategoriestyles}</style>
        </div> : <React.Fragment/>;
    }
};