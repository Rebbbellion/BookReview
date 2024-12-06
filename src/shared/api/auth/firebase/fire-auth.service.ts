import { inject, Injectable } from "@angular/core";
import {
  Auth,
  createUserWithEmailAndPassword,
  UserCredential,
} from "@angular/fire/auth";
import { defer, Observable } from "rxjs";

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
    );
  }
}
