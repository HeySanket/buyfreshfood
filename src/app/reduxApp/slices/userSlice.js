import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      var arr = [...state];
      arr.push(action.payload);
      return arr;
    },
  },
});

export const { addUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
