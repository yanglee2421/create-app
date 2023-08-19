// Vue Imports
import { Plugin } from "vue";

// Element Plus Imports
import ElementPlus from "element-plus";
// @ts-ignore
import locale from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

export const PluginElement: Plugin = {
  install(app) {
    app.use(ElementPlus, { locale });
  },
};
