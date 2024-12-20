import {
  EnvironmentProviders,
  isDevMode,
  makeEnvironmentProviders,
} from "@angular/core";

import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";

export const storeConfig: EnvironmentProviders = makeEnvironmentProviders([
  provideStore(),
  provideEffects(),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
]);
