// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { GameData } from "./getdata";

// // Fetching local game.json data
// const fetchGameData = createAsyncThunk('gameData/fetchGameData', async () => {
//     const response = await GameData();
//     return response.data;
// })

// const gameDataSlice = createSlice({ 
//     name: 'gameData',
//     initialState: { data: [], status: 'idle', error: null },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchGameData.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchGameData.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.data = action.payload;
//             })
//             .addCase(fetchGameData.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
                
//             });
//     },
// });

// export default gameDataSlice.reducer;
// export {fetchGameData};