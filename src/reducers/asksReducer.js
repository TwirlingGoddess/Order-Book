const initialState = []
import { organizeAsks } from '../helpers/helpers';

const asksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_ASKS':
      return action.asks
      break;
    case 'REMOVE_ASK':
      return state.filter(ask => ask !== action.ask)
      break;
    case 'ADD_ASK':
      return organizeAsks([...state, action.ask])
      break;
    case 'UPDATE_ASK':
      const array = state.map(ask => {
        if(ask.id === action.id){
          return ask = action.newAsk
        } else {
          return ask
        }
        return
      })
      return organizeAsks(array)
    default:
      return state
  }
}

export default asksReducer