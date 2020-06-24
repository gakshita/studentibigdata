import { STORE_FOLLOWUP_DATA, ADD_FOLLOWUP_FOLLOWUPS } from "./type.js";

export function store_followup(payload) {
  return {
    type: STORE_FOLLOWUP_DATA,
    payload,
  };
}

export function add(payload) {
  return {
    type: ADD_FOLLOWUP_FOLLOWUPS,
    payload,
  };
}
