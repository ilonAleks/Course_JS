import { legacy_createStore } from "redux";
import taskReducer from "./task";

function configureStore() {
  return legacy_createStore(taskReducer);
}

export default configureStore;
