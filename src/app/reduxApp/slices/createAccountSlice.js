import { createSlice } from "@reduxjs/toolkit";

export const createAccountSlice = createSlice({
  name: "account",
  initialState: [],
  reducers: {
    createAccount: (state, action) => {
      var arr = [...state];
      arr.push(action.payload);
      return arr;
    },
  },
});

export const { createAccount } = createAccountSlice.actions;
export const selectUser = (state) => state.user;
export default createAccountSlice.reducer;
