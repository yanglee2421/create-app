// Provider Imports
import { ReduxProvider } from "@/redux";
import { QueryProvider } from "@/api/provider";

// Router Imports
import { RouterProvider } from "react-router-dom";
import { router } from "@/routers";

function App() {
  return (
    <ReduxProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </ReduxProvider>
  );
}

export default App;
