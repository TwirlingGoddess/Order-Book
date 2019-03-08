const initialState = 0

const spreadReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'STORE_SPREAD':
      return action.spread
    default:
      return state
  }
}

export default spreadReducer