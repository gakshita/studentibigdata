import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "../Action/type.js";

const initial_state = {
  login: false,
  token: "",
  type: "",
};

function login_reducer(state = initial_state, action) {
  console.log("login reducer");

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        login: true,
        token: action.payload.token,
        type: action.payload.type,
      };

    case LOGOUT:
      return {
        login: false,
        token: "",
        type: "",
      };
    default:
      return state;
  }
}

export default login_reducer;
