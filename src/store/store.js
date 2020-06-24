import { createStore, combineReducers, applyMiddleware } from "redux";
import login_reducer from "./Reducer/login_reducer";
import master_reducer from "./Reducer/master_reducer";
import student_reducer from "./Reducer/student_reducer";
import followup_reducer from "./Reducer/followup_reducer";
import task_reducer from "./Reducer/task_reducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  login_reducer,
  master_reducer,
  student_reducer,
  followup_reducer,
  task_reducer,
});

const store = createStore(rootReducer);
export default store;
