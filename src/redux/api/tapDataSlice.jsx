import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GetTapData } from "./getdata";

//這裡抓產銷履歷與有機蔬果行情的資料，url:https://data.moa.gov.tw/open_detail.aspx?id=H44

const fetchTapData = createAsyncThunk('tapData/fetchTapData', async () => {
    const response = await GetTapData();
    return response.data;
})

const tapDataSlice = createSlice({ 
    name: 'tapData',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTapData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTapData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchTapData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default tapDataSlice.reducer;
export {fetchTapData};