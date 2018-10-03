import { SET_LIST } from '../actions/friends';

export const initialState = {
  list: [],
};

function friendsReducer (state = initialState, action) {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state
  }
}

export default friendsReducer;