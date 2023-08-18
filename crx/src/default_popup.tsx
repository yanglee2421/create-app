// React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// App Imports
import { DefaultPopup } from "@/apps/default_popup";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DefaultPopup />
  </React.StrictMode>
);

console.log("popup", chrome);
