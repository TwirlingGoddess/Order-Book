import { combineReducers } from 'redux';
import userReducer from './userReducer';
import ordersReducer from './ordersReducer';


const rootReducer = combineReducers({
  user: userReducer,
  orders: ordersReducer
});

export default rootReducer;