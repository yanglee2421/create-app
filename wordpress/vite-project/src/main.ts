// Vue Imports
import { createApp } from "vue";
import App from "./App.vue";

// Plugins Imports
import { PluginElement } from "@/plugins";

// Vite Imports
import "vite/modulepreload-polyfill";

const app = createApp(App);
app.use(PluginElement);
app.mount("#app");
