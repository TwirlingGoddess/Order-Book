const initialState = [];

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
    default:
      return state
  }
}

export default bidsReducer