import { createSlice } from "@reduxjs/toolkit";

export const updateBuy = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = updateBuy.actions;

export default updateBuy.reducer;
