// Router Imports
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./router-routes";

// Nprogress Imports
import NProgress from "nprogress";
// import "nprogress/nprogress.css";

const history = createWebHashHistory();

export const router = createRouter({ history, routes });

router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

router.afterEach((to) => {
  // ** Title
  const title = to.meta.title;
  if (typeof title === "string") document.title = title;
});
