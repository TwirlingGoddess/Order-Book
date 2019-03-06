import { combineReducers } from 'redux';
import userReducer from './userReducer';
import ordersReducer from './ordersReducer';
import bidsReducer from './bidsReducer';
import asksReducer from './asksReducer';
import filterReducer from './filterReducer';


const rootReducer = combineReducers({
  user: userReducer,
  orders: ordersReducer,
  asks: asksReducer,
  bids: bidsReducer,
  filter: filterReducer
});

export default rootReducer;