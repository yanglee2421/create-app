// Provider Imports
import { ReduxProvider } from "@/redux";
import { QueryProvider } from "@/api/provider";

// Router Imports
import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";

export function App() {
  return (
    <ReduxProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ReduxProvider>
  );
}
