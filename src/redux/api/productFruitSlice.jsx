import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FruitData } from "./getdata";

//這裡抓本地端的fruit.json資料

const fetchFruitData = createAsyncThunk('fruitData/fetchFruithData', async () => {
    const response = await FruitData();
    return response.data;
})

const fruitDataSlice = createSlice({ 
    name: 'fruitData',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFruitData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFruitData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchFruitData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                
            });
    },
});

export default fruitDataSlice.reducer;
export {fetchFruitData};