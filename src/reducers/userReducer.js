const initalState = {};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return {
        ...state,
        userName: action.user.name,
        userBalances: action.user.balances
      }
    case 'UPDATE_USER':
      return {
        ...state,
        userBalances: action.user
      }
    default:
      return state;
  }
};

export default userReducer;