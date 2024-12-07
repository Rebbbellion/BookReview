import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { User, UserFacade } from "entities/user";
import { Observable } from "rxjs";
import { PopupComponent } from "shared/ui/popup";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [PopupComponent, RouterOutlet, AsyncPipe],
  templateUrl: "./sidebar.component.html",
  styleUrl: "./sidebar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private userFacade: UserFacade = inject(UserFacade);

  public get user$(): Observable<User | null> {
    return this.userFacade.user;
  }
}
