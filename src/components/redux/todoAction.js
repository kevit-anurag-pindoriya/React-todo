export const addtodos = (todos) => ({
  type: "ADD_TODOS",
  payload : todos
});

export const removetodos = (id) => ({
  type: "REMOVE_TODOS",
  payload : id
});


export const updatetodos = (id) => ({
  type: "UPDATE_TODOS",
  payload : id
});