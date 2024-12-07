import { Action, createFeature } from "@ngrx/store";
import { registerReducer, UserState } from "./user.reducers";

function userReducer(state: UserState | undefined, action: Action) {
  return registerReducer(state, action);
}

export const userFeature = createFeature({
  name: "user",
  reducer: userReducer,
});

export const { selectErr, selectStatus, selectUser } = userFeature;
