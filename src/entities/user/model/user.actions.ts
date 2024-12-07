import { createActionGroup, props } from "@ngrx/store";
import { RegisterCredentials, User, UserDetails } from "./user.model";

export const registerActions = createActionGroup({
  source: "User API",
  events: {
    registerReq: props<{
      credentials: RegisterCredentials;
      details: UserDetails;
    }>(),
    registerReqSuccess: props<{ user: User }>(),
    registerReqFailure: props<{ err: Error }>(),
  },
});
