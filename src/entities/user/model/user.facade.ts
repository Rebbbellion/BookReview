import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { registerActions } from "./user.actions";
import { selectErr, selectStatus, selectUser } from "./user.feature";
import { RegisterCredentials, User, UserDetails } from "./user.model";
import { LoginStatus, UserState } from "./user.reducers";

@Injectable({
  providedIn: "root",
})
export class UserFacade {
  private readonly store: Store<UserState> = inject(Store<UserState>);

  public get user(): Observable<User | null> {
    return this.store.select(selectUser);
  }

  public get status(): Observable<LoginStatus> {
    return this.store.select(selectStatus);
  }

  public get error(): Observable<Error | null> {
    return this.store.select(selectErr);
  }

  public register(
    credentials: RegisterCredentials,
    details: UserDetails
  ): void {
    this.store.dispatch(registerActions.registerReq({ credentials, details }));
  }
}
