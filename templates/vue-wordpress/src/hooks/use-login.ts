// Store Imports
import { computed, nextTick } from "vue";

// Store Imports
import { useStoreLogin, Usr } from "./use-store-login";

// API Imports
import { useQueryClient } from "@tanstack/vue-query";

// Vue Imports
import {} from "vue";

// Router Imports
import {
  useRouter,
  useRoute,
  RouteLocationRaw,
  LocationQueryValue,
} from "vue-router";

export function useLogin() {
  // Store Hooks
  const { session, setSession, local, setLocal } = useStoreLogin();

  const usr = computed(() => {
    return local.usr || session.usr;
  });

  // Router Hooks
  const router = useRouter();
  const route = useRoute();

  // Sign In
  const signIn = async (data: Usr, remember?: boolean) => {
    // Change Store
    switch (Boolean(remember)) {
      // ** Local
      case true:
        setLocal((state) => {
          state.usr = data;
        });
        break;
      // ** Session
      case false:
        setSession((state) => {
          state.usr = data;
        });
        break;
    }

    await nextTick();
    const homeRoute = toHomeRoute(route.query.returnUrl);
    await router.push(homeRoute);
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

    await nextTick();
    await router.push({ name: "login" });
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

  return { signIn, signOut, updateUsr, usr };
}

export function toHomeRoute(params: ToHomeRouteParams): RouteLocationRaw {
  if (Array.isArray(params)) {
    return { name: "home" };
  }
  if (!params) return { name: "home" };
  return { path: decodeURIComponent(params) };
}
type ToHomeRouteParams = LocationQueryValue | LocationQueryValue[];
