// Vite Imports
import "vite/modulepreload-polyfill";

// Vue Imports
import { createApp } from "vue";
import App from "./App.vue";

// Plugins Imports
import { plugin } from "@/plugins";

// Styles Imports
import "@/assets/scss/global.scss";
import "@/assets/css/style.css";

const app = createApp(App);
app.use(plugin);
app.mount("#app");
