// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getTapData } from "./getdata";

// //這裡抓產銷履歷與有機蔬果行情的資料，url:https://data.moa.gov.tw/open_detail.aspx?id=H44

// const fetchData = createAsyncThunk('tapData/fetchData', async () => {
//     const response = await getTapData();
//     return response.data;
// })

// const tapDataSlice = createSlice({ 
//     name: 'tapData',
//     initialState: { data: [], status: 'idle', error: null },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchData.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchData.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.data = action.payload;
//             })
//             .addCase(fetchData.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             });
//     },
// });

// export default tapDataSlice.reducer;
// export {fetchData};