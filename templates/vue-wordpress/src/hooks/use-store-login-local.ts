import { defineStore } from "pinia";
import { reactive } from "vue";

export const useStoreLoginLocal = defineStore(
  "login-local",
  () => {
    // State && Dispatch
    const state = reactive<State>({
      usr: null,
    });
    const setState = (dispatch: Dispatch) => {
      dispatch(state);
    };

    return { state, setState };
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }],
    },
  }
);

type Dispatch = (state: State) => void;

interface State {
  usr: Usr | null;
}

export interface Usr {
  role: string;
  email: string;
  loginAt: string;
}
