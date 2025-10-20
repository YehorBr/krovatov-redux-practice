import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { furnitureReducer } from "./furnitureSlice";

const reducers = combineReducers({
    furniture: furnitureReducer,
})

export const store = configureStore({
    reducer: reducers,
})