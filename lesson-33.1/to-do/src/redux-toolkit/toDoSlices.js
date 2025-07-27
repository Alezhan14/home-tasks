import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: {
        toDoList: [],
    },
    status: 'idle',
    error: null,
    reducers: {
        addToDo: (state, action) => {
            state.toDoList.unshift({
                title: action.payload,
                completed: false,
                id: state.toDoList.length + 1,
                userId: 1
            });
        },
        removeToDo: (state, action) => {
            state.toDoList = state.toDoList.filter(todo => todo.id !== action.payload)
        },
        editToDo: (state, action) => {
            const { id, text = 'edited text' } = action.payload;
            state.toDoList.find(todo => {
                if(todo.id === id) {
                    todo.title = text;
                }
            });
        },
        completeToDo: (state, action) => {
            const id = action.payload;
            console.log(id);
            state.toDoList.find(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
            });
        },

        clearToDo: (state) => {
            state.toDoList = [];
        },

        fetchToDoRequest: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        fetchToDoSuccess: (state, action) => {
            state.status = 'successes';
            state.toDoList = action.payload;
        },
        fetchToDoFailure: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }
    }
})

export const { addToDo, removeToDo, editToDo, fetchToDoRequest, completeToDo, clearToDo, fetchToDoSuccess, fetchToDoFailure } = toDoSlice.actions;
export default toDoSlice.reducer;