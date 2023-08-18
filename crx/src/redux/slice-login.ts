// Redux Toolkit Imports
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const mutateLogin = createAsyncThunk<Login, Partial<Login>>(
  "login/mutate",
  async (payload) => {
    const { login } = await chrome.storage.sync.get("login");

    const prev = login || initialState();
    Object.assign(prev, payload);
    await chrome.storage.sync.set({ login: prev });

    const { login: newValue } = await chrome.storage.sync.get("login");
    return newValue;
  }
);

export const sliceLogin = createSlice({
  name: "login",
  initialState,
  reducers: {
    islogged(state, { payload }: PayloadAction<boolean>) {
      state.isLogged = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(mutateLogin.fulfilled, (s, { payload }) => {
      s.isLoading = false;
      Object.assign(s, payload);
    });
    builder.addCase(mutateLogin.pending, (s) => {
      s.isLoading = true;
    });
  },
});

function initialState(): Login {
  return {
    isLogged: false,
    isLoading: false,
  };
}

export interface Login {
  isLogged: boolean;
  isLoading: boolean;
}
