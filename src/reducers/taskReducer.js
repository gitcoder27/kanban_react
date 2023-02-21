import { Constants } from "../Constant/Constant";

const initialState = { "": { id: "", taskName: "", groupName: "" } };
const taskTypeOrder = [Constants.group_backlog, Constants.group_todo, Constants.group_ongoing, Constants.group_done];

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE-TASK":
            delete state[action.payload];
            return state
        case "MOVE-TASK":
            const curr_group = state[action.payload.id]?.groupName;
            statestate[action.payload.id].groupName = taskTypeOrder[taskTypeOrder.indexOf(curr_group) + action.payload.movement];
            return state
        case "ADD-TASK":
            state[action.payload.id] = action.payload;
            return state
        default: return state;

    }
}