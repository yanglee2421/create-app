// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { OptionsPage } from "@/apps/options_page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OptionsPage />
  </React.StrictMode>
);

console.log("options", chrome);
