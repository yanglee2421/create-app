// Vite Imports
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx, defineManifest } from "@crxjs/vite-plugin";

// NodeJs Imports
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest: manifest() })],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3003,
  },
  build: {
    rollupOptions: {
      input: {
        default_popup: resolve(__dirname, "./default_popup.html"),
        options_page: resolve(__dirname, "./options_page.html"),
      },
    },
  },
});

function manifest() {
  return defineManifest({
    // ** Required
    manifest_version: 3,
    name: "CRXJS React Vite Example",
    version: "0.0.1",

    // ** Scripts
    content_scripts: [
      {
        js: ["src/content.tsx"],
        matches: ["*://*/*"],
      },
    ],
    permissions: ["contextMenus", "tabs", "storage"],
    background: {
      service_worker: "src/background.ts",
      type: "module",
    },

    // ** Views
    action: {
      default_popup: "default_popup.html",
      default_title: "WP采集",
    },
    options_page: "options_page.html",
  });
}
