import { STORE_TASK_DATA } from "./type.js";

export function store(payload) {
  return {
    type: STORE_TASK_DATA,
    payload,
  };
}
