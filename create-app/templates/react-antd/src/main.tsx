// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

// I18n Imports
import "@/i18n";

// FakeDB Imports'
import "@/api/fakedb";

// Styles Imports
import "@/assets/scss/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
