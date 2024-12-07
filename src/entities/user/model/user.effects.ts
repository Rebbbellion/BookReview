import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { UserApiService } from "../api/user-api.service";
import { UserService } from "../api/user-service.interface";
import { registerActions } from "./user.actions";
import { User } from "./user.model";

@Injectable({
  providedIn: "root",
})
export class UserEffects {
  private readonly actions: Actions = inject(Actions);
  private readonly userService: UserService = inject(UserApiService);

  public registerEffect = createEffect(() =>
    this.actions.pipe(
      ofType(registerActions.registerReq),
      exhaustMap(({ credentials, details }) =>
        this.userService.register(credentials, details).pipe(
          map((user: User) => registerActions.registerReqSuccess({ user })),
          catchError((err: Error) =>
            of(registerActions.registerReqFailure({ err }))
          )
        )
      )
    )
  );
}
