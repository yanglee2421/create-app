// Store Imports
import { useStoreLogin, Usr } from "./use-store-login";

// API Imports
import { useQueryClient } from "@tanstack/vue-query";

export function useLogin() {
  // Store Hooks
  const { session, setSession, local, setLocal } = useStoreLogin();

  const state = local || session;

  // Sign In
  const signIn = async (data: Usr, remember?: boolean) => {
    // ** Local
    if (remember) {
      setLocal((state) => {
        state.usr = data;
      });
      return;
    }

    // Change Store
    setSession((state) => {
      state.usr = data;
    });
  };

  // API Hooks
  const queryClient = useQueryClient();

  // Sign Out
  const signOut = async () => {
    // Clear Store
    setSession((state) => {
      state.usr = null;
    });
    setLocal((state) => {
      state.usr = null;
    });

    // Clear Query
    queryClient.clear();
  };

  // Update User
  const updateUsr = (usr: Partial<Usr>) => {
    // ** Session
    setSession((prev) => {
      if (!prev) return;
      Object.assign(prev, usr);
    });

    // ** Local
    setLocal((prev) => {
      if (!prev) return;
      Object.assign(prev, usr);
    });
  };

  return { signIn, signOut, updateUsr, state };
}
