import { RouteObject, Navigate } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "",
    lazy() {
      return import("./router-guard");
    },
    children: [
      {
        path: "*",
        element: <Navigate to="/404" replace />,
      },
      {
        id: "404",
        path: "404",
        lazy() {
          return import("@/pages/404");
        },
      },
      {
        id: "login",
        path: "login",
        lazy() {
          return import("@/pages/login");
        },
      },
      {
        id: "home",
        path: "",
        lazy() {
          return import("@/pages/home");
        },
      },
    ],
  },
];
