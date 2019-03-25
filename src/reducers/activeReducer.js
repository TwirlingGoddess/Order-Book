const initalState = [];

const activeReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'DISPLAY_ORDERS':
      return action.activeOrders
      break;
    case 'UPDATE_ACTIVE':
      const newObj = Object.assign({}, action.order, { id: Math.random() * Date.now()/2, key: Math.random() * Date.now()/2})
      return [...state, newObj]
    default:
      return state;
  }
};

export default activeReducer