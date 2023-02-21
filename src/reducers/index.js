import { combineReducers } from "redux";
import { taskReducer, selectedTask } from "./taskReducer";

const rootReducer = combineReducers({ taskReducer, selectedTask });

export default rootReducer;
