import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "SliceTest",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const SliceAction = Slice.actions;
export const SliceTestReducer = Slice.reducer;
