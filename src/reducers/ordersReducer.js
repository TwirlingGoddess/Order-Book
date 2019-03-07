const initalState = [];

const ordersReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_ORDERS':
      return action.orders.map(order => Object.assign({}, order, order['closed']= false ))
      break;
    case 'REMOVE_ORDER':
      return state.filter(order => order !== action.order)
    case 'ADD_ORDER':
      return [...state, action.order]
    default:
      return state;
  }
};

export default ordersReducer;