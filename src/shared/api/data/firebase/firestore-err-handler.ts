import { FirestoreError } from "@angular/fire/firestore";
import { catchError, OperatorFunction, throwError } from "rxjs";

export function firestoreErrHandler<T>(): OperatorFunction<T, any> {
  return catchError((err: FirestoreError) =>
    throwError(() => new Error(err.code, { cause: "Data Access Error" }))
  );
}

//TODO add error map codes and write user-friendly texts for each case
