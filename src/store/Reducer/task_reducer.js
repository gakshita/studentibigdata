import { STORE_TASK_DATA } from "../Action/type.js";

const initial_state = {
  tasks: null,
};

function task_reducer(state = initial_state, action) {
  console.log("master reducer");

  switch (action.type) {
    case STORE_TASK_DATA:
      state.tasks = action.payload.data;
      var newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}

export default task_reducer;
