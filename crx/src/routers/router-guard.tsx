// MUI Imports
import { Backdrop, CircularProgress } from "@mui/material";

// Hooks Imports
import { useAuthRoute } from "./use-auth-route";

// Redux Imports
import {
  mutateSettings,
  mutateLogin,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import { useEffect } from "react";

export function Component() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((s) => s.login.isLoading);

  useEffect(() => {
    dispatch(mutateSettings({}));
    dispatch(mutateLogin({}));
  }, [dispatch]);

  const routeEl = useAuthRoute();

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
