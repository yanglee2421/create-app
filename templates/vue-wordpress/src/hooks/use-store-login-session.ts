// Store Imports
import { defineStore } from "pinia";

// Vue Imports
import { reactive } from "vue";

export const useStoreLoginSession = defineStore("login-session", () => {
  const state = reactive({
    usr: null,
  });

  const setState = (dispatch: Dispatch) => dispatch(state);

  return { state, setState };
});

type Dispatch = (state: State) => void;
