import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-popup",
  standalone: true,
  imports: [],
  templateUrl: "./popup.component.html",
  styleUrl: "./popup.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "popup__container",
  },
})
export class PopupComponent {}
