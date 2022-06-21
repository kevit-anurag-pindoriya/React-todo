const init = [];
export const todoReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return [...state, action.payload];
    case "REMOVE_TODOS":
      return state.filter((data) =>{return (data.Time != action.payload)  } );
      case "TOGAL" :
        console.log(document.getElementById(action.payload).className)
        return document.getElementById(action.payload).className == "uncompleted" ? document.getElementById(action.payload).className = 'completed' : document.getElementById(action.payload).className = 'uncompleted'
    default:
      return state;
  }
};
