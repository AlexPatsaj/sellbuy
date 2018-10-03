import { createStore } from 'redux'; 

export const ItemFiltersReducter = createStore(   (filters = { setFilter:null , collections:[],sale:[],priceRange:{min:0,max:1000},brands:[],category:[],subCategory:[]}, action  ) => {
	console.log("reducer header ", action ); 

	switch(action.type){
		case 'setFilter':  
			filters[action.name] = action.value; 
			filters.setFilter = action.name; 

			filters.nSelected= 0; 
			for( var filter in filters){ 
				for(let x=0; x<filters[filter].length; ++x){ 
					if(filters[filter][x].selected){
						++filters.nSelected;
					}
				}
			}   
			break; 

		case 'clearAll':
		 	for( var filter in filters){ 
				for(let x=0; x<filters[filter].length; ++x){  
					if(filters[filter][x].selected ){
						filters[filter][x].selected = false;
					}
				}
			}

		 	filters.setFilter= '%';
			filters.nSelected = 0; 
		break;
	} 
	return filters;  
});