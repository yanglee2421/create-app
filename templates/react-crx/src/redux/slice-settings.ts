// Redux Imports
import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const mutateSettings = createAsyncThunk<Settings, Partial<Settings>>(
  "settings/mutate",
  async (payload) => {
    const { settings } = await chrome.storage.sync.get("settings");

    const prev = settings || initialState();
    Object.assign(prev, payload);
    await chrome.storage.sync.set({ settings: prev });

    const { settings: newValue } = await chrome.storage.sync.get("settings");
    return newValue;
  }
);

export const sliceSettings = createSlice({
  name: "settings",
  initialState,
  reducers: {
    showContextMenus(s, { payload }: PayloadAction<boolean>) {
      s.showContextMenus = payload;
    },
    showContextMenusToggle(s) {
      s.showContextMenus = !s.showContextMenus;
    },
  },
  extraReducers(builder) {
    builder.addCase(mutateSettings.fulfilled, (s, { payload }) => {
      s.isLoading = false;
      Object.assign(s, payload);
    });
    builder.addCase(mutateSettings.pending, (s) => {
      s.isLoading = true;
    });
  },
});

function initialState(): Settings {
  return {
    showContextMenus: true,
    isLoading: false,
  };
}

export interface Settings {
  showContextMenus: boolean;
  isLoading: boolean;
}
