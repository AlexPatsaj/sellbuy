import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer, { initialState } from './reducers';

const bindMiddleware = (middlewares) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middlewares))
  }
  return compose(applyMiddleware(...middlewares))
};

export default (state = initialState) => {
  return createStore(
    rootReducer,
    state,
    bindMiddleware([thunkMiddleware, createLogger()])
  );
}
