import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "../dist",
    rollupOptions: {
      output: {
        entryFileNames: "assets/wp-vite-main.js",
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
