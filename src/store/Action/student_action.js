import {
  STORE_STUDENT_DATA,
  ADD_STUDENT_DATA,
  DELETE_STUDENT_DATA,
} from "./type.js";

export function store(payload) {
  return {
    type: STORE_STUDENT_DATA,
    payload,
  };
}

export function add_student_data(payload) {
  return {
    type: ADD_STUDENT_DATA,
    payload,
  };
}

export function delete_student_data(payload) {
  return {
    type: DELETE_STUDENT_DATA,
    payload,
  };
}
