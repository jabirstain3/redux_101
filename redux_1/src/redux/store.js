import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
// import logger from "redux-logger";
import Logger from "./middelware/logger";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddelware) => getDefaultMiddelware().concat(Logger)
})