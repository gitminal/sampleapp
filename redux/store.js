import {combineReducers, applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import productReducer from './reducer/productReducer'
 export const rootReducer = combineReducers({
  productReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));