const init = [];
export const todoReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return [...state, action.payload];
    case "REMOVE_TODOS":
      return state.filter((data) => {
        return data.Time != action.payload;
      });
    case "UPDATE_TODOS":
      return state.map((data) =>
        data.Time === action.payload
          ? { ...data, isCompleted: !data?.isComplited }
          : data
      );
    default:
      return state;
  }
};
