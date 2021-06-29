const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        myList: state.myList.find((item) => item.id === action.payload.id)
          ? [...state.myList]
          : [action.payload, ...state.myList],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
