const initalState = [];

const activeReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'DISPLAY_ORDERS':
      return action.activeOrders
      break;
    case 'UPDATE_ACTIVE':
      return [...state, action.order]
    default:
      return state;
  }
};

export default activeReducer