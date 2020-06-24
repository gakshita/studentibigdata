import { STORE_MASTER_DATA } from "../Action/type.js";
import { retrieve_data, get_api } from "../../api/api.js";

const initial_state = {
  Campaigns: null,
  Category: null,
};

function master_reducer(state = initial_state, action) {
  console.log("master reducer");

  switch (action.type) {
    case STORE_MASTER_DATA:
      state[action.payload.master] = action.payload.data;
      var newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}

export default master_reducer;
