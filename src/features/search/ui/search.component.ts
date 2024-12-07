import { Component } from "@angular/core";
import {
  ButtonComponent,
  ButtonConfig,
  ButtonStylesClass,
} from "shared/ui/button";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.scss",
})
export class SearchComponent {
  public readonly SEARCH_BUTTON: ButtonConfig = {
    title: "",
    type: "button",
    stylesClass: ButtonStylesClass.Search,
  };
}
