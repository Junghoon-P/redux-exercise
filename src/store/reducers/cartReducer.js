const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return [...action.payload];
    default:
      return state;
  }
};

export default cartReducer;

const INITIAL_STATE = [];
