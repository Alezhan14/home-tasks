import {createSlice} from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name: 'toDo',
    initialState: [],
    reducers: {
        addToDo: (state, action) => {
            const newToDo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            }
            state.push(newToDo);
        },
        removeToDo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleToDo: (state, action) => {
            const toDo = state.find((toDo) => toDo.id === action.payload);

            if(toDo) {
                toDo.completed = !toDo.completed;
            }
        }
    }
})

export const {addToDo, removeToDo, toggleToDo} = toDoSlice.actions;
export default toDoSlice.reducer;
