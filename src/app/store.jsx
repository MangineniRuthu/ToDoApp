import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todos/TodoSlice.jsx"

export const store=configureStore({
    reducer:{
        todos:todoReducer,
    }
});