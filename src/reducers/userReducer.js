const initalState = {};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_USERNAME':
      return { 
        ...state, 
        username: action.username 
      }
      
    case 'STORE_BALANCES':
      return {
        ...state,
        PHP: action.balances[0].balance,
        TestCoin: action.balances[1].balance,
        Orders: []     
      }
    case 'UPDATE_USER':
      return {
        ...state,
        PHP: action.balances[0].balance.toFixed(5),
        TestCoin: action.balances[1].balance.toFixed(5) 
      }
    case 'SAVE_ORDER':
      return {
        ...state,
        Orders: [...state.Orders, action.order]
      }
    case 'DISPLAY_ORDERS':
      return {
        ...state,
        Orders: action.orders
      }
    default:
      return state;
  }
};

export default userReducer;