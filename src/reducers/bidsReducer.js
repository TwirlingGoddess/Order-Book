const initialState = [];
import { organizeBids } from '../helpers/helpers';

const bidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_BIDS':
      return action.bids      
      break;
    case 'REMOVE_BID':
      return state.filter(bid => bid !== action.bid)
      break;
    case 'ADD_BID':
      return organizeBids([...state, action.bid])
      break;
    case 'UPDATE_BID':
      const array = state.map((bid, index) => {
        if(index === action.index){
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