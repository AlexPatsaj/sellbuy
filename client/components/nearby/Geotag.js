import React, { Component} from 'react';
import {ICON_GEOTAG} from '../static/Icons'; 


import nearbyReducer from '../../reducers/nearby';
export default class Geotag extends Component {
 
  	constructor(props){
	  	super(props);
	  	this.state = {
	  		selected:false
	  	};
	}

	componentDidMount(){
		console.log("will subscribe to reducer "); 

		nearbyReducer.subscribe( () => {
			let state = nearbyReducer.getState(); 
			let newState = state.selected_store.id == this.props.store.id; 
			console.log('state ',state);

			console.log(state.selected_store.title, state.selected_store.id , this.props.store.id , state.selected_store.id == this.props.store.id)
		 	if(this.state.selected != newState ){		 	
				this.setState({
					selected: newState
				}); 	
		 	}
		}); 
	}


  render() {
    return (
      <div className={"geotag"+(this.state.selected? ' selected':'')}>
		    {ICON_GEOTAG}
      </div>
    );
  }
}