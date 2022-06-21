const init = [];
export const todoReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return [...state, action.payload];
    case "REMOVE_TODOS":
      return state.filter((data) =>{return (data.Time != action.payload)  } );
    default:
      return state;
  }
};
