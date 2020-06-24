import { STORE_MASTER_DATA } from "./type.js";

export function store(payload) {
  return {
    type: STORE_MASTER_DATA,
    payload,
  };
}
