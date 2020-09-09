export function createActionTypes(base, actions = []) {
  return actions.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export function createAction(type, data = {}) {
  console.log("type iz utilsa", type);
  console.log("data iz utilsa", data);

  return { type, payload: data };
}
