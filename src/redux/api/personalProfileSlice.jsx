import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PersonalProfileData } from "./getdata";

//這裡抓本地端的fruit.json資料

const fetchPersonalProfileData = createAsyncThunk('personalProfileData/fetchPersonalProfileData', async () => {
    const response = await PersonalProfileData();
    return response.data;
})

const personalProfileSlice = createSlice({ 
    name: 'profileData',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPersonalProfileData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPersonalProfileData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchPersonalProfileData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                
            });
        },

});

export default personalProfileSlice.reducer;
export {fetchPersonalProfileData};