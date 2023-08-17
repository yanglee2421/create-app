// Redux Toolkit Imports
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Slice Imports
import { sliceLogin } from "./slice-login";

// Create Reducer
const reducer = combineReducers({
  [sliceLogin.name]: sliceLogin.reducer,
});

// Create Store
export const store = configureStore({ reducer });

// ** Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
