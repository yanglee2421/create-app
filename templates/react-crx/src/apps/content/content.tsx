// Provider Imports
import { QueryProvider } from "@/api/provider";

// Components Imports
import { ContentMain } from "./content-main";

// Toast Imports
import { Toaster } from "react-hot-toast";

export function Content() {
  console.log(chrome);

  return (
    <QueryProvider>
      <Toaster />
      <ContentMain />
    </QueryProvider>
  );
}
