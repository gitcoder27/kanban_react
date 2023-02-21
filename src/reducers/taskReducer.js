import { Constants } from "../Constant/Constant";

const initialState = {};
const taskTypeOrder = [Constants.group_backlog, Constants.group_todo, Constants.group_ongoing, Constants.group_done];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE-TASK":
      delete state[action.payload];
      return { ...state };
    case "MOVE-TASK":
      const curr_group = state[action.payload.id]?.groupName;
      state[action.payload.id].groupName = taskTypeOrder[taskTypeOrder.indexOf(curr_group) + action.payload.movement];
      return { ...state };
    case "ADD-TASK":
      console.log(action);
      console.log(action.payload);
      state[action.payload.id] = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export const selectedTask = (state = "", action) => {
  switch (action.type) {
    case "SELECT-TASK":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
