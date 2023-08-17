// Redux Toolkit Imports
import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";

// Slice Imports
import { sliceLogin } from "./slice-login";

// Create Reducer
const reducer = combineReducers({
  [sliceLogin.name]: sliceLogin.reducer,
});

// Create Store
export const store = configureStore({
  reducer,
  middleware(getMiddleWare) {
    return getMiddleWare({});
  },
});

// ** Types
type RootReducer = typeof reducer;
export type RootState = RootReducer extends Reducer<infer R, any> ? R : unknown;
export type AppDispatch = typeof store.dispatch;
