// API Hooks
import { useMutation } from "@tanstack/react-query";

// Redux Hooks
import { useAppDispatch, sliceLogin } from "@/redux";

// Toast Imports
import { toast } from "react-hot-toast";

export function useLogout() {
  // Redux Hooks
  const dispatch = useAppDispatch();

  // API Hooks
  return useMutation<unknown, Error>({
    async mutationFn() {
      await chrome.storage.sync.set({ isLogged: false, usr: null });
      const action = sliceLogin.actions.islogged(false);
      dispatch(action);
      return await chrome.storage.sync.get(["isLogged", "usr"]);
    },
    onError(err) {
      toast.error(err.message);
    },
    onSuccess() {
      toast.success("Logout Successlly!");
    },
  });
}
