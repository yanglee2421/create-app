// React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Toast Imports
import { Toaster } from "react-hot-toast";

// App Imports
import { Content } from "@/apps/content";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Toaster toastOptions={{ style: { zIndex: 99 } }} />
    <Content />
  </React.StrictMode>
);
