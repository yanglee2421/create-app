// Vite Imports
import { ConfigEnv, defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// NodeJs Imports
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  void configEnv;

  return {
    plugins: [react()],

    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },

    base: "/react",
    build: build(configEnv),
    server: server(configEnv),
  };
});

function build({ mode }: ConfigEnv): UserConfig["build"] {
  void mode;

  return {};
}

function server({ mode }: ConfigEnv): UserConfig["server"] {
  void mode;

  return {
    https: false,
    port: 5173,
    fs: { allow: [".."] },
    proxy: {
      "/dev": {
        target: "http://127.0.0.1",
        rewrite: (path) => path.replace(/^\/dev/, ""),
        changeOrigin: true,
        ws: true,
      },
    },
  };
}
