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
        data: []
    },
    reducers: {
        getUserData: (state, action) => {
            console.log('getUserData action dispatched with payload:');
        },
        clearUserData: (state, action) => {
            console.log('clearUserData action dispatched');
        }
    },
    extraReducers:  (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
            })
    }

});

export const {getUserData, clearUserData} = userDataSlice.actions;
export default userDataSlice.reducer;