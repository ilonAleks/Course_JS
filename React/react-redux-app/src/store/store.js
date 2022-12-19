import { legacy_createStore, compose, applyMiddleware } from "redux";
import { logger } from "./middleware/loger";
import { thunk } from "./middleware/thunk";
import taskReducer from "./task";

const middlewareEnhancer = applyMiddleware(logger, thunk);

function configureStore() {
  return legacy_createStore(
    taskReducer,
    compose(
      middlewareEnhancer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

export default configureStore;
