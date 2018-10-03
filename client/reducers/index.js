import { combineReducers } from 'redux';

import searchReducer, { initialState as searchState } from './search';
import friendsReducer, { initialState as friendsState } from './friends';

export const initialState = {
  search: searchState,
  friends: friendsState,
};

const rootReducer = combineReducers({
  search: searchReducer,
  friends: friendsReducer,
});

export default rootReducer;