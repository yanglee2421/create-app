// Provider Imports
import { ReduxProvider } from "@/redux";
import { QueryProvider } from "@/api/provider";
import { AclProvider } from "@/configs/acl";

// Router Imports
import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";

export function App() {
  return (
    <ReduxProvider>
      <QueryProvider>
        <AclProvider>
          <RouterProvider router={router} />
        </AclProvider>
      </QueryProvider>
    </ReduxProvider>
  );
}
