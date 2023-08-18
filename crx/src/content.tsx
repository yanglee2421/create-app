// React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// App Imports
import { Content } from "@/apps/content";

const root = document.createElement("div");
root.id = "warpdriven-crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);

console.log("content", chrome);
