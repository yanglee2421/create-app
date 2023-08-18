// Redux Imports
import { useAppDispatch, useAppSelector, mutateLogin } from "@/redux";

export function useLogout() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((s) => s.login.isLoading);
  const mutate = () => {
    dispatch(mutateLogin({ isLogged: false }));
  };

  return { mutate, isLoading };
}
