// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// I18n Imports
import "@/i18n";

// HTML Element
const el = document.querySelector("#root");
bootstrap(el);

function bootstrap(el: Element | null) {
  if (!el) {
    console.error("Invalid Element");
    return;
  }

  // React Root
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}