import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReduser = combineReducers({});

export function createStore() {
    return configureStore({
        reducer: rootReduser
    });
}
