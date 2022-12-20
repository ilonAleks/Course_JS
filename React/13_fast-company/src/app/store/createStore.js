import { combineReducers, configureStore } from "@reduxjs/toolkit";
import professionsReducer from "./professions";
import qualitiesReducer from "./qualities";
import usersReducer from "./users";

const rootReduser = combineReducers({
    qualities: qualitiesReducer,
    professions: professionsReducer,
    users: usersReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReduser
    });
}
