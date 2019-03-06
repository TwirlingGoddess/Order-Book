const initalState = [];

const asksReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_ASKS':
      return action.asks
    default:
      return state;
  }
};

export default asksReducer;