// Redux Toolkit Imports
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const sliceTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    isDark(state, { payload }: PayloadAction<boolean>) {
      state.isDark = payload;
    },
    isDarkToggle(state) {
      state.isDark = !state.isDark;
    },
  },
});

function initialState() {
  return {
    isDark: false,
  };
}
