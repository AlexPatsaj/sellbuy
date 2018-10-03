import React from 'react'; 

import btnStyles from  '../../static/comp-styles/general/BtnAdd2Cart.scss'; 

import {ADD_TO_CART, ICON_UI_TICK} from '../static/Icons'; 
import Cart  from '../../models/Cart'; 

export default class BtnAdd2Cart extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			added: false
		}
	}

	addToCart(){
		this.setState({
			added: true
		})
		Cart.addProduct(this.props.product); 
	}

	render(){ 
		return <div className="btn btnAdd2Cart" onClick={this.addToCart.bind(this)}>
                    {this.state.added ? ICON_UI_TICK : ADD_TO_CART }
                <style jsx global>{btnStyles}</style>
        </div>;
	}
}