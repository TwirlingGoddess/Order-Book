const initialState = [];

const bidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_BIDS':
      return action.bids      
      break;
    case 'REMOVE_BID':
      return state.filter(bid => bid !== action.bid)
      break;
    case 'ADD_BID':
      return [...state, action.bid]
    default:
      return state
  }
}

export default bidsReducer