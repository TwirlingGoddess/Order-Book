const initalState = {};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'STORE_USER':
      return {
        ...state,
        user: action.name
      }
    default:
      return state;
  }
};

export default userReducer;