const initialState = [];
import { organizeBids } from '../helpers/helpers';

const bidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_BIDS':
      return action.bids      
      break;
    case 'REMOVE_BID':
      // state.find(obj=> obj.id !== action.ask.id) maybe?
      return state.filter(bid => bid !== action.bid)
      break;
    case 'ADD_BID':
      // state.find(obj=> obj.id !== action.ask.id) even if that means make new reducer case 
      return [...state, action.bid]
      break;
    case 'UPDATE_BID':
      const array = state.map((bid, index) => {
        if(index === action.oldBid){
          return state[index]= action.newBid
        } else {
          return bid
        }
        return
      })
      return organizeBids(array)
    default:
      return state
  }
}

export default bidsReducer