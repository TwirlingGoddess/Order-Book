const initialState = 0
// import { store } from '../index.js';

const spreadReducer = (state = 0, action) => {
  switch(action.type) {
    case 'STORE_SPREAD':
      return action.spread
      break;
    // case 'UPDATE_SPREAD':
    //   const spread = store.getState().bids[0].volume - store.getState().asks[0].volume
    //   console.log(spread)
    //   return 'gotem'
    //   break;
    default:
      return state
  }
}

export default spreadReducer