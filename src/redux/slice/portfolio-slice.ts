import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dummyData from "../../res/dummyData.json";
import { DummyState, DummyData } from "../../types/index";

const initialState: DummyState = {
  dummy: dummyData,
  color: "c-pink",
  loading: false,
  error: undefined,
};

export const fetchDummyData = createAsyncThunk<DummyData>("dummyData/fetch", async () => {
return dummyData;
});

const dummyDataSlice = createSlice({
  name: "dummyData",
  initialState,
  reducers: {
    changeColor: (state, action) => {
    state.color = action.payload;
    },
  },
  extraReducers: (builder) => {
    
    builder.addCase(fetchDummyData.pending, (state) => {
    state.loading = true;
    });
    
    builder.addCase(fetchDummyData.fulfilled, (state, action) => {
    state.loading = false;
    state.dummy = action.payload;
    });
    
    builder.addCase(fetchDummyData.rejected, (state, action) => {
    state.loading = false;
    state.dummy = [];
    state.error = action.error.message ?? "An error occurred";
    });
  },
});

export const { changeColor } = dummyDataSlice.actions;
const portfolioSlice = dummyDataSlice.reducer;
export default portfolioSlice;
