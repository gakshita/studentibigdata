import {
  STORE_STUDENT_DATA,
  ADD_STUDENT_DATA,
  _STUDENT_DATA,
  DELETE_STUDENT_DATA,
} from "../Action/type.js";

const initial_state = {
  Students: null,
};

function student_reducer(state = initial_state, action) {
  console.log("student reducer");

  switch (action.type) {
    case STORE_STUDENT_DATA:
      state.Students = action.payload.data;
      var newState = Object.assign({}, state);
      return newState;

    case ADD_STUDENT_DATA:
      state.Students.push(action.payload.data);
      var newState = Object.assign({}, state);
      console.log(newState, "newSatte");
      return newState;

    case DELETE_STUDENT_DATA:
      var data = state.Students.filter((obj) => obj._id !== action.payload._id);
      state.Students = data;
      var newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}

export default student_reducer;
