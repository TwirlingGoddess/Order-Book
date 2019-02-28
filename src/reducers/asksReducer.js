const initalState = {};

const asksReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_ASKS':
      return {
        ...state,
        asks: action.asks,
      }
    default:
      return state;
  }
};

export default asksReducer;