import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('userData/fetchData', async () => {
    const response = await fetch('https://swapi.tech/api/people');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
})

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        data: [],
        shownPerson: undefined
    },
    reducers: {
        addCurrentPerson: (state, action) => {
            state.shownPerson = action.payload;
        },
        clearCurrentPersonData: (state, action) => {
            state.shownPerson = undefined;
        }
    },
    extraReducers:  (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
    }

});

export const {getUserData, addCurrentPerson, clearCurrentPersonData} = userDataSlice.actions;
export default userDataSlice.reducer;