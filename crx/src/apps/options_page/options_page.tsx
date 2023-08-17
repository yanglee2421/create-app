// Router Imports
import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";

// Toast Imports
import { Toaster } from "react-hot-toast";

// MUI Imports
import { CssBaseline } from "@mui/material";

// Provider Imports
import { QueryProvider } from "@/api/provider";
import { ReduxProvider } from "@/redux";

export function OptionsPage() {
  return (
    <ReduxProvider>
      <QueryProvider>
        <CssBaseline />
        <Toaster />
        <RouterProvider router={router} />
      </QueryProvider>
    </ReduxProvider>
  );
}
