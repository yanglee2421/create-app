import type { RouterOptions } from "vue-router";

export const routes: RouterOptions["routes"] = [
  { path: "/:pathMatch(.*)*", redirect: "/404" },
  {
    path: "/404",
    component: () => import("@/pages/404/404.vue"),
    name: "404",
    meta: { title: "NotFound" },
  },
  {
    path: "/login",
    component: () => import("@/pages/login/login.vue"),
    name: "login",
    meta: { title: "Login" },
  },
  {
    path: "/",
    component: () => import("@/pages/home/home.vue"),
    name: "home",
    meta: { title: "Home" },
  },
];
