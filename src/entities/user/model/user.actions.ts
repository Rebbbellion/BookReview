import { createActionGroup, props } from "@ngrx/store";
import { RegisterCredentials, User } from "./user.model";

export const registerActions = createActionGroup({
  source: "User API",
  events: {
    registerReq: props<{
      credentials: RegisterCredentials;
    }>(),
    registerReqSuccess: props<{ user: User }>(),
    registerReqFailure: props<{ err: Error }>(),
  },
});
