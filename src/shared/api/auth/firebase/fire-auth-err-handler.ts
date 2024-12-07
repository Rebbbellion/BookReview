import { AuthError } from "@angular/fire/auth";
import { catchError, OperatorFunction, throwError } from "rxjs";

export function fireAuthErrorHandler<T>(): OperatorFunction<T, any> {
  return catchError((err: AuthError) =>
    throwError(() => new Error(err.code, { cause: "Authentification" }))
  );
}
//TODO add error map codes and write user-friendly texts for each case
