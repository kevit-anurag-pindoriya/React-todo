export const addtodos = (todos,flag) => ({
  type: "ADD_TODOS",
  payload: todos,
  status : flag
});

export const removetodos = (id) => ({
  type: "REMOVE_TODOS",
  payload: id,
});

export const togal = (tog , flag) => ({
  type: "TOGAL",
  payload: tog,
  status : flag
});
