import { all } from 'redux-saga/effects';
import { watchFetchToDo } from './tasksSaga.js';

export default function* rootSaga() {
    yield all([watchFetchToDo()]);
}