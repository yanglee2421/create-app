// Vite Imports
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// NodeJs Imports
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Path Alias
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },

  // CSS Preprocessor
  css: {
    preprocessorOptions: {
      scss: {
        additonalData: `@use "@yanglee2421/scss" as *;`,
      },
    },
  },

  // ** Build
  base: "/base",

  // Dev Server
  server: {
    port: 3004,
    proxy: {
      "/dev": {
        target: "https://exmple.com",
        rewrite(path) {
          return path.replace(/^\/dev/, "");
        },
        ws: true,
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
