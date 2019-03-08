const initialState = []

const asksReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'STORE_ASKS':
      return action.asks
      break;
    case 'REMOVE_ASK':
      return state.filter(ask => ask !== action.ask)
      break;
    case 'ADD_ASK':
      return [...state, action.ask]
    default:
      return state
  }
}

export default asksReducer