const initalState = [];

const ordersReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_ORDERS':
      return action.orders.map(order => Object.assign({}, order, order['closed']= false ))
      break;

    default:
      return state;
  }
};

export default ordersReducer;