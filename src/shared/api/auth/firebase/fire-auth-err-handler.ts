import { AuthError } from "@angular/fire/auth";

export function fireAuthErrorHandler(err: AuthError): Error {
  console.log(err);
  return new Error(err.code, { cause: "Authentification" });
}
//TODO add error map codes and write user-friendly texts for each case
