import { inject, Injectable } from "@angular/core";
import {
  addDoc,
  collection,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  getDocs,
  query,
  QueryConstraint,
  QueryDocumentSnapshot,
  QuerySnapshot,
  setDoc,
} from "@angular/fire/firestore";
import { defer, map, Observable } from "rxjs";
import { FirestoreCollectionsNames } from "./firestore-collections.enum";

@Injectable({
  providedIn: "root",
})
export class FirestoreService<Data extends DocumentData> {
  private readonly firestore: Firestore = inject(Firestore);

  private getCollectionRef(
    collectionPath: FirestoreCollectionsNames
  ): CollectionReference<Data, Data> {
    return collection(this.firestore, collectionPath) as CollectionReference<
      Data,
      Data
    >;
  }

  private getDocumentRef(
    collectionPath: FirestoreCollectionsNames,
    id: string
  ): DocumentReference<Data, Data> {
    return doc(this.firestore, collectionPath, id) as DocumentReference<
      Data,
      Data
    >;
  }

  public getDocuments(
    collectionPath: FirestoreCollectionsNames,
    ...queries: QueryConstraint[]
  ): Observable<(Data & { id: string })[]> {
    return defer(() => {
      const queryRef = query(this.getCollectionRef(collectionPath), ...queries);
      return getDocs(queryRef);
    }).pipe(
      map((querySnap: QuerySnapshot<Data, Data>) =>
        querySnap.docs.map((docSnap: QueryDocumentSnapshot<Data, Data>) => ({
          ...docSnap.data(),
          id: docSnap.id,
        }))
      )
    );
  }

  public addDocument(
    collectionPath: FirestoreCollectionsNames,
    data: Data
  ): Observable<Data & { id: string }> {
    return defer(() =>
      addDoc(this.getCollectionRef(collectionPath), data)
    ).pipe(
      map((docRef: DocumentReference<Data, Data>) => ({
        ...data,
        id: docRef.id,
      }))
    );
  }

  public upsertDocument(
    collectionPath: FirestoreCollectionsNames,
    data: Data,
    id: string
  ): Observable<Data & { id: string }> {
    return defer(() =>
      setDoc(this.getDocumentRef(collectionPath, id), data)
    ).pipe(map(() => ({ ...data, id })));
  }

  public deleteDocument(
    collectionPath: FirestoreCollectionsNames,
    id: string
  ): Observable<void> {
    return defer(() => deleteDoc(this.getDocumentRef(collectionPath, id)));
  }
}
