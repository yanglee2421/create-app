// React Imports
import { useMemo, useEffect } from "react";

// MUI Imports
import { Backdrop, CircularProgress } from "@mui/material";

// API Imports
import { useLogin, useLoginVali } from "@/hooks";

// Redux Imports
import { useAppSelector } from "@/redux";

// Router Imports
import { Navigate, useMatches, useOutlet } from "react-router-dom";
import { toIsInWhitelist } from "./router-whitelist";

export function Component() {
  // Router Hooks
  const outlet = useOutlet();
  const matches = useMatches();

  const to = matches[matches.length - 1];

  // Redux Hooks
  const isLogged = useAppSelector((s) => s.login.islogged);

  // Route Element
  const routeEl = useMemo(() => {
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

  const { mutate } = useLogin();
  const { data, isLoading } = useLoginVali();
  useEffect(() => {
    if (!data?.isLogged) return;
    mutate();
  }, [data, mutate]);

  return (
    <>
      {routeEl}
      <Backdrop
        open={isLoading}
        sx={{
          color: "common.white",
          zIndex(theme) {
            return theme.zIndex.mobileStepper - 1;
          },
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
