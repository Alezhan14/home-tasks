import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from './toDoSlices.js';
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../saga/index.js";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        ToDoData: toDoReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}), sagaMiddleware, logger]
});

sagaMiddleware.run(rootSaga);

export default store;