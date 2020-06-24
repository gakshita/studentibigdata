import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "./type";

export function login(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function logout(payload) {
  return {
    type: LOGOUT,
    payload,
  };
}
