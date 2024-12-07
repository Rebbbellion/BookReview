import { Routes } from "@angular/router";

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
];
