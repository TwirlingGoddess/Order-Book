const initalState = {};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return {
        ...state,
        userName: action.user.name,
        userBalances: action.user.balances
      }
    default:
      return state;
  }
};

export default userReducer;