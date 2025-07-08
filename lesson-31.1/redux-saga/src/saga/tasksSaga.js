import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchToDoSaga() {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = yield response.json();
        yield put({ type: 'toDo/fetchToDoSuccess', payload: data });
    } catch (error) {
        yield put({ type: 'toDo/fetchToDoFailure', payload: error.message });
    }
}

export function* watchFetchToDo() {
    yield takeLatest('toDo/fetchToDoRequest', fetchToDoSaga);
}