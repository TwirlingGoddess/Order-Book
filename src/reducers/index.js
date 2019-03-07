import { combineReducers } from 'redux';
import userReducer from './userReducer';
import ordersReducer from './ordersReducer';
import activeReducer from './activeReducer';
import filterReducer from './filterReducer';


const rootReducer = combineReducers({
  user: userReducer,
  orders: ordersReducer,
  active: activeReducer,
  filter: filterReducer
});

export default rootReducer;