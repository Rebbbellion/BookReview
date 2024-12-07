import { createActionGroup, props } from "@ngrx/store";
import { User, UserDetails } from "./user.model";

export const registerActions = createActionGroup({
  source: "User API",
  events: {
    registerReq: props<{
      email: string;
      password: string;
      details: UserDetails;
    }>(),
    registerReqSuccess: props<{ user: User }>(),
    registerReqFailure: props<{ err: Error }>(),
  },
});
