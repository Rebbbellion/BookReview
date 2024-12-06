import { FirestoreError } from "@angular/fire/firestore";

export function firestoreErrHandler(err: FirestoreError) {
  console.log(err);

  return new Error(err.code, { cause: "Data Access Error" });
}

//TODO add error map codes and write user-friendly texts for each case
