import {
  EnvironmentProviders,
  isDevMode,
  makeEnvironmentProviders,
} from "@angular/core";

import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { UserEffects, userFeature } from "entities/user";

export const storeConfig: EnvironmentProviders = makeEnvironmentProviders([
  provideStore(),
  provideState(userFeature),
  provideEffects(UserEffects),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
]);
