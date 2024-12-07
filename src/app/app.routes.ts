import { Routes } from "@angular/router";
import { HomeComponent, homeRoutes } from "pages/home";

export const routes: Routes = [
  { path: "", component: HomeComponent, children: homeRoutes },
];
