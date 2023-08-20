// Vite Imports
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// NodeJs Imports
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss" as *;`,
      },
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        entryFileNames: "assets/wp-vite-main.js",
        assetFileNames: "assets/[name][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        manualChunks(id) {
          const isVue = id.indexOf("node_modules/vue") !== -1;
          if (isVue) return "vue";
        },
      },
    },
  },
});
