import { combineReducers } from 'redux';
import userReducer from './userReducer';
import ordersReducer from './ordersReducer';
import asksReducer from './asksReducer';
import bidsReducer from './bidsReducer';
import spreadReducer from './spreadReducer';
import activeReducer from './activeReducer';
import filterReducer from './filterReducer';


const rootReducer = combineReducers({
  user: userReducer,
  asks: asksReducer,
  bids: bidsReducer,
  spread: spreadReducer,
  active: activeReducer,
  filter: filterReducer
});

export default rootReducer;