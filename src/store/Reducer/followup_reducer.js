import { STORE_FOLLOWUP_DATA, ADD_FOLLOWUP_FOLLOWUPS } from "../Action/type.js";
import followups from "../../components/Followup/followups.js";

const initial_state = {
  followups: null,
};

function followup_reducer(state = initial_state, action) {
  console.log("followup reducer");

  switch (action.type) {
    case STORE_FOLLOWUP_DATA:
      state["followups"] = action.payload.data;
      var newState = Object.assign({}, state);
      return newState;

    case ADD_FOLLOWUP_FOLLOWUPS:
      console.log(action.payload);
      const findObject = (obj) => obj._id == action.payload.data.id;
      var index = state.followups.findIndex(findObject);
      console.log(index, state.followups[index]);

      state.followups[index]["followups"].push(action.payload.data);
      var newState = Object.assign({}, state);
      console.log(newState);
      return newState;

    default:
      return state;
  }
}

export default followup_reducer;
