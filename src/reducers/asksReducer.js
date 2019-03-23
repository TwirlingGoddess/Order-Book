const initialState = []

const asksReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'STORE_ASKS':
      return action.asks
      break;
    case 'REMOVE_ASK':
      return state.filter(ask => ask !== action.ask)
      // state.find(obj=> obj.id !== action.ask.id) maybe?
      break;
    case 'ADD_ASK':
      return [...state, action.ask]
      // state.find(obj=> obj.id !== action.ask.id) even if that means make new reducer case 
    default:
      return state
  }
}

export default asksReducer