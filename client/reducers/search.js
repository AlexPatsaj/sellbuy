import { CHANGE_GLOBAL_FILTER } from '../actions/search';

export const initialState = {
  value: '',
};

function searchReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_GLOBAL_FILTER:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state
  }
}

export default searchReducer;