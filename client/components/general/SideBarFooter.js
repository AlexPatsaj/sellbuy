import React from 'react'; 
import Link from 'next/link'; 

import Dropdown from '../general/Dropdown';
import Styles from '../../static/comp-styles/general/SideBarFooter.scss'

/* 
	*	On pages with infinite scroll we might want to append elements from the footer to a sticky component, we do it here 
*/
export default class SideBarFooter extends React.Component {
	constructor(props){
		super(props);

        this.buyerLinks = [
            {title:'How to Shop', 'href':'/'},
            {title:'Privacy Policy', 'href':'/privacy-policy'},
            {title:'FAQ', 'href':'/faq'}
        ]; 

        this.sellerLinks = [
            {title:'Register as a Seller', 'href':'/'},
            {title:'Privacy Policy', 'href':'/privacy-policy'}
        ]; 

        this.buysellpay = [
            {title:'About Us', 'href':'/'},
            {title:'Careers', 'href':'/'},
            {title:'How It Works', 'href':'/'},
            {title:'Media', 'href':'/'},
            {title:'Terms and Conditions', 'href':'/'},
            {title:'Returns', 'href':'/'},
        ]; 
	}

    goTo(section, title){
        let selectedLink = {}; 
        let links = this[section]; 

        for(var x=0; x<links.length; ++x){
            if(links[x].title == title){
                selectedLink = links[x]; 
            }
        }

        window.location.href = selectedLink.href; 
    }

    getOptions(links){
        let options = []; 
        for(let x=0; x<links.length;++x){
            options[x] = links[x].title; 
        }

        return options; 
    }

	render(){
		return <div className=' SideBarFooter'> 
				   <div className="footer-menu__list">
                       {/*<Dropdown options={this.getOptions(this.buyerLinks)} default={"Buyer"} callback={ (selected) => {this.goTo('buyerLinks', selected )} }/>
                       <Dropdown options={this.getOptions(this.sellerLinks)} default={"Seller"} callback={ (selected) => {this.goTo('sellerLinks', selected )} }/>
                       <Dropdown options={this.getOptions(this.buysellpay)} default={"Midddly"} callback={ (selected) => {this.goTo('buysellpay', selected )} }/>*/}
                       <Link href='/about'><a>About</a></Link>&middot;
                       <Link href='/'><a>Sell on Midddly</a></Link> &middot;
                       <Link href='/'><a>Get The App</a></Link>&middot;
                       <Link href='/'><a>Contact</a></Link>&middot;
                       <Link href='/'><a>Privacy Policy</a></Link>&middot;
                       <Link href='/'><a>Terms of Service</a></Link>&middot;
                   </div>
                <style jsx global>{Styles}</style>
		</div>; 
	}
}