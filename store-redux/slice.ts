import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMacData = createAsyncThunk('macData', async (thunkApi) => {
    const res = await fetch('https://population-data-efc6c-default-rtdb.firebaseio.com/data.json');
    const data = await res.json();
    return data
})
const INITIAL_STATE = {
    macdataFullData: [],
    macdata: [],
    loading: false,
    selectEdera: ''
} as any

const dataslice = createSlice({
    name: 'mac-data',
    initialState: INITIAL_STATE,
    reducers: {

        updateSelectedEra(state, action) {
            state.selectEdera = action.payload;
            
        },
        updateDataPeriod(state) {
            state.loading = false
             state.macdata = [];
             let newMac = [...state.macdataFullData];
             let target = newMac[0]
             state.macdata.push(target[state.selectEdera])

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMacData.fulfilled, (state, action) => {
            state.macdataFullData.push(action.payload);
            state.loading = false;
        });
        builder.addCase(fetchMacData.pending, (state) => {
            state.loading = true;
        });
    }

});
export const { updateSelectedEra ,updateDataPeriod} = dataslice.actions
export default dataslice.reducer;
