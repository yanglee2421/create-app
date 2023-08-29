// Redux Toolkit Imports
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const mutateLogin = createAsyncThunk<State, Partial<State>>(
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
    islogged(state, { payload }: PayloadAction<Usr | null>) {
      state.usr = payload;
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

function initialState(): State {
  return {
    usr: null,
    isLoading: false,
  };
}

interface State {
  usr: Usr | null;
  isLoading: boolean;
}

interface Usr {
  role: string;
}
