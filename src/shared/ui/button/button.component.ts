import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { ButtonConfig, ButtonStylesClass } from "./button.config";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
  styleUrl: "./button.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[class]": "buttonConfig.stylesClass",
  },
})
export class ButtonComponent {
  @Input() buttonConfig: ButtonConfig = {
    title: "",
    type: "button",
    stylesClass: ButtonStylesClass.Close,
  };
}
