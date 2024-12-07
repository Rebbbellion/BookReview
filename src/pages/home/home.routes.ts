import { Routes } from "@angular/router";
import { sidebarRoutes } from './sidebar';

export const homeRoutes: Routes = [
  { path: "", redirectTo: "books", pathMatch: "full" },
  {
    path: "books",
    loadComponent: () => import("./books").then((c) => c.BooksComponent),
  },
  {
    path: "posts",
    loadComponent: () => import("./posts").then((c) => c.PostsComponent),
  },
	{
    path: "menu",
    loadComponent: () =>
      import("./sidebar").then((c) => c.SidebarComponent),
    children: sidebarRoutes,
  },
];
