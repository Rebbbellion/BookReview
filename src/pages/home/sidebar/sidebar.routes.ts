import { Routes } from "@angular/router";

export const sidebarRoutes: Routes = [
  {
    path: "register",
    loadComponent: () =>
      import("features/register").then((c) => c.RegisterComponent),
  },
  {
    path: "login",
    loadComponent: () => import("features/login").then((c) => c.LoginComponent),
  },
];
