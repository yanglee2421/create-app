// API Imports
import { useMutation } from "@tanstack/react-query";

// Redux Imports
import { sliceLogin, useAppDispatch } from "@/redux";

// Toast Imports
import { toast } from "react-hot-toast";

export function useLogin() {
  // Redux Hooks
  const dispatch = useAppDispatch();

  // API Hooks
  return useMutation<Res, Error>({
    async mutationFn() {
      await chrome.storage.sync.set({ isLogged: true });
      const action = sliceLogin.actions.islogged(true);
      dispatch(action);
      return (await chrome.storage.sync.get("isLogged")) as Res;
    },
    onError(err) {
      toast.error(err.message);
    },
  });
}

interface Res {
  isLogged: boolean;
}
