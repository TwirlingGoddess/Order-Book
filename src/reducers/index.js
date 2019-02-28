import { combineReducers } from 'redux';
import userReducer from './userReducer';
import ordersReducer from './ordersReducer';
import bidsReducer from './bidsReducer';
import asksReducer from './asksReducer';


const rootReducer = combineReducers({
  user: userReducer,
  orders: ordersReducer,
  asks: asksReducer,
  bids: bidsReducer
});

export default rootReducer;