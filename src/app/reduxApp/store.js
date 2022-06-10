import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import createAccountReducer from "./slices/createAccountSlice";
import counterReducer from "./slices/updateBuy";

export const store = configureStore({
  reducer: {
    user: userReducer,
    account: createAccountReducer,
    counter: counterReducer,
  },
});
