import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { User, UserFacade } from "entities/user";
import { SearchComponent } from "features/search";
import { Observable } from "rxjs";
import {
  ButtonComponent,
  ButtonConfig,
  ButtonStylesClass,
} from "shared/ui/button";
import { PopupComponent } from "shared/ui/popup";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [
    PopupComponent,
    ButtonComponent,
    SearchComponent,
    RouterOutlet,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private readonly userFacade: UserFacade = inject(UserFacade);

  public get user$(): Observable<User | null> {
    return this.userFacade.user;
  }

  public readonly REGISTER_BUTTON: ButtonConfig = {
    title: "Register",
    type: "button",
    stylesClass: ButtonStylesClass.Primary,
  };

  public readonly LOGIN_BUTTON: ButtonConfig = {
    title: "Login",
    type: "button",
    stylesClass: ButtonStylesClass.Secondary,
  };
}
