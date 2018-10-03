import { createStore } from 'redux'; 

export const headerReducer = createStore(   (state = {area:''}, action  ) => {
	console.log("reducer itemFilters ", action ); 

	switch(action.type){
		case 'openClose': 
			state.area =  state.area == action.area ? '' : action.area;  
			break; 
	}

	return state;
});
