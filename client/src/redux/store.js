import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer.js';
import thunk from 'redux-thunk';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(rootReducer, compose (applyMiddleware(thunk)) )
 
    
export default store;