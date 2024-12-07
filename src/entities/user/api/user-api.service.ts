import { inject, Injectable } from "@angular/core";
import { concatMap, map, Observable, tap } from "rxjs";
import { FireAuthService } from "shared/api/auth";
import { FirestoreService, StoreService } from "shared/api/data";
import { environment } from "shared/environments";
import { RegisterCredentials, User, UserDetails } from "../model/user.model";
import { UserService } from "./user-service.interface";

@Injectable({
  providedIn: "root",
})
export class UserApiService implements UserService {
  private readonly auth: FireAuthService = inject(FireAuthService);
  private readonly store: StoreService<UserDetails> = inject(FirestoreService);

  public register(
    credentials: RegisterCredentials,
    details: UserDetails
  ): Observable<User> {
    return this.auth
      .registerWithEmailAndPassword(credentials.email, credentials.password)
      .pipe(
        tap(), //TODO Write logic for updating user photoURL and displayName
        concatMap(({ user }) => {
          const data: UserDetails = {
            country: details.country,
            dob: details.dob,
            gender: details.gender,
            id: user.uid,
          };
          return this.store
            .upsertDocument(
              environment.firebase.collectionNames.userDetails,
              data
            )
            .pipe(
              map((userDetails: UserDetails) => {
                const userObj: User = {
                  displayName: user.displayName as string,
                  photoURL: user.photoURL ?? "assets/user/mock-avatar.jpg",
                  email: user.email as string,
                  emailVerified: user.emailVerified,
                  details: userDetails,
                  id: user.uid,
                };
                return userObj;
              })
            );
        })
      );
  }
}
