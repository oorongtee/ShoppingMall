import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TeaData } from "./getdata";

// Fetching local game.json data
const fetchTeaData = createAsyncThunk('teaData/fetchTeaData', async () => {
    const response = await TeaData();
    return response.data;
})

const teaDataSlice = createSlice({ 
    name: 'teaData',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTeaData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTeaData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchTeaData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                
            });
    },
});

export default teaDataSlice.reducer;
export {fetchTeaData};