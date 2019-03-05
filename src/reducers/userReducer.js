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
        TestCoin: action.balances[1].balance
      }
    case 'UPDATE_USER':
      return {
        ...state,
        PHP: action.balances[0].balance,
        TestCoin: action.balances[1].balance      }
    default:
      return state;
  }
};

export default userReducer;