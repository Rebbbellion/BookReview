import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { environment } from "shared/environments";

export const firebaseConfig: EnvironmentProviders = makeEnvironmentProviders([
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
]);
