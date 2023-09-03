// Redux Imports
import { useAppDispatch, useAppSelector, sliceLogin } from "@/redux";
import { Usr } from "@/redux/slice-login";

// Toast Imports
import { toast } from "react-hot-toast";

export function useLogin() {
  // Redux Hooks
  const dispatch = useAppDispatch();
  const usr = useAppSelector((s) => s.login.usr);

  // Sign In
  const signIn = (usr: Usr) => {
    const action = sliceLogin.actions.usr(usr);
    dispatch(action);
    toast.remove();
    toast.success("Wellcome back!");
  };

  // Sign Out
  const signOut = () => {
    const action = sliceLogin.actions.usr(null);
    dispatch(action);
    toast.remove();
    toast.success("Sign out successlly!");
  };

  return { signIn, signOut, usr };
}
