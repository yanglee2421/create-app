// Redux Imports
import { useAppSelector } from "@/redux";

// Router Imports
import { Navigate, useMatches, useOutlet } from "react-router-dom";
import { toIsInWhitelist } from "./router-whitelist";

// React Imports
import { useMemo } from "react";

export function useAuthRoute() {
  // Router Hooks
  const outlet = useOutlet();
  const matches = useMatches();

  const to = matches[matches.length - 1];

  // Redux Hooks
  const isLogged = useAppSelector((s) => s.login.isLogged);

  // Route Element
  return useMemo(() => {
    const { id } = to;

    // Go Login
    const isToLogin = id === "login";
    if (isToLogin) return isLogged ? <Navigate to="/" /> : outlet;

    // In The Whitelist
    const isInWhitelist = toIsInWhitelist(id);
    if (isInWhitelist) return outlet;

    // Has Logged
    if (isLogged) return outlet;

    // Not Logged
    return <Navigate to="/login" />;
  }, [outlet, isLogged, to]);
}
