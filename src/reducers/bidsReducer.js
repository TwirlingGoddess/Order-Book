const initalState = {};

const bidsReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_BIDS':
      return {
        ...state,
        bids: action.bids,
      }
    default:
      return state;
  }
};

export default bidsReducer;