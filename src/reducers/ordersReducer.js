const initalState = {};

const ordersReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_ORDERS':
      return {
        ...state,
        allOrders: action.orders,
      }
    default:
      return state;
  }
};

export default ordersReducer;