import {configureStore} from "@reduxjs/toolkit";
import sliceReducer from "./toDoSlice";

export const store = configureStore({
    reducer: {
        toDo: sliceReducer,
    }
});