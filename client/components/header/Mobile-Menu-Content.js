import React from "react";

import mobileMenuStyles from '../../static/comp-styles/header/MobileMenuContent.scss'
import Link from 'next/link'

import Main from './Header-mobile-main';
import Categories from './Header-mobile-categories'; 

import Midddly from '../../models/Midddly'; 

export default class MobileMenuContent extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            depthLevel:0
        }
        this.categories = []; 
        this.selectedCat = 0; 
    }

    componentDidMount(){
        if(this.categories.length == 0 ){
            this.categories = Midddly.getMenuCategories(); 
        }
    }

    /*
    *   @param depth go to this level 
    *   @param int idx of the selected cat 
    */
    setDepth(depth,idx){
        console.log('SET depth'+ depth); 
        this.setState({'depthLevel': depth });

        if(depth == 2){
            this.selectedCat = this.categories[idx]; 
        }
    }  
 
    getCategories(){
        console.log('get categories for level',this.state.depthLevel);
        return  this.state.depthLevel == 1 ? this.categories : this.selectedCat.children;  
    }


    render() {
        return <div className="hamburger-content"> 
               { this.state.depthLevel == 0 && <Main goto={  this.setDepth.bind(this) } closeMenu={this.props.closeMenu}/>}
               { this.state.depthLevel == 1 && <Categories categories={this.getCategories()} prevLevel='0' goto={this.setDepth.bind(this)}/>}
               { this.state.depthLevel == 2 && <Categories categories={this.getCategories()} prevLevel='1' goto={this.setDepth.bind(this)} title={this.selectedCat.name}/>}
                <style jsx global>{mobileMenuStyles}</style>
            </div>
        }
};