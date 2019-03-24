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
      return [...state, action.ask]
      break;
    case 'UPDATE_ASK':
      const array = state.map((ask, index) => {
        if(index === action.index){
          return state[index]= action.newAsk
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