import { createStore } from 'redux'; 
import { SELECT_STORE } from '../actions/nearby';

export const initialState = {
  selected_store: null,
  stores:[]
};

const nearbyReducer = createStore( (state = initialState, action) => {
  switch (action.type) {
    case SELECT_STORE:
      return {
        ...state,
        selected_store: action.payload,
      };
    default:
      return state
  }
}); 

export default nearbyReducer;