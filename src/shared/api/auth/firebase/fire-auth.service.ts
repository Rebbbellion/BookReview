import { inject, Injectable } from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from "@angular/fire/auth";
import { defer, Observable } from "rxjs";
import { fireAuthErrorHandler } from "./fire-auth-err-handler";

@Injectable({
  providedIn: "root",
})
export class FireAuthService {
  private readonly auth: Auth = inject(Auth);

  public registerWithEmailAndPassword(
    email: string,
    password: string
  ): Observable<UserCredential> {
    return defer(() =>
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(fireAuthErrorHandler());
  }
}
