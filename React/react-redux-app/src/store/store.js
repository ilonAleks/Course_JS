import { legacy_createStore } from "redux";
import { taskReducer } from "./taskReducer";

const initialState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
];

export function initiateStore() {
  return legacy_createStore(taskReducer, initialState);
}
