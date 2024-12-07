import { createReducer, on } from "@ngrx/store";
import { registerActions } from "./user.actions";
import { User } from "./user.model";

export const enum LoginStatus {
  NotLogined = "not-logined",
  Logining = "logining",
  Logined = "logined",
}

export interface UserState {
  user: User | null;
  status: LoginStatus;
  err: Error | null;
}

const initialUserState: UserState = {
  user: null,
  status: LoginStatus.NotLogined,
  err: null,
};

export const registerReducer = createReducer(
  initialUserState,
  on(registerActions.registerReq, (state: UserState) => ({
    ...state,
    status: LoginStatus.Logining,
    err: null,
  })),
  on(registerActions.registerReqSuccess, (state: UserState, { user }) => ({
    ...state,
    user,
    status: LoginStatus.Logined,
  })),
  on(registerActions.registerReqFailure, (state: UserState, { err }) => ({
    ...state,
    status: LoginStatus.NotLogined,
    err,
  }))
);
