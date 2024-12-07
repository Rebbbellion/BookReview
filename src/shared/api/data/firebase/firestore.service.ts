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
import { EntityDTO } from "shared/lib/types";
import { toEntityFormat, toServerFormat } from "../store-data-mappers";
import { StoreService } from "../store-service.interface";
import { firestoreErrHandler } from "./firestore-err-handler";

@Injectable({
  providedIn: "root",
})
export class FirestoreService<Data extends DocumentData & { id: string }>
  implements StoreService<Data>
{
  private readonly firestore: Firestore = inject(Firestore);

  private getCollectionRef(
    collectionPath: string
  ): CollectionReference<EntityDTO<Data>, EntityDTO<Data>> {
    return collection(this.firestore, collectionPath) as CollectionReference<
      EntityDTO<Data>,
      EntityDTO<Data>
    >;
  }

  private getDocumentRef(
    collectionPath: string,
    id: string
  ): DocumentReference<Data, EntityDTO<Data>> {
    return doc(this.firestore, collectionPath, id) as DocumentReference<
      Data,
      EntityDTO<Data>
    >;
  }

  public getDocuments(
    collectionPath: string,
    ...queries: QueryConstraint[]
  ): Observable<Data[]> {
    return defer(() => {
      const queryRef = query(this.getCollectionRef(collectionPath), ...queries);
      return getDocs(queryRef);
    }).pipe(
      map((querySnap: QuerySnapshot<EntityDTO<Data>, EntityDTO<Data>>) =>
        querySnap.docs.map(
          (docSnap: QueryDocumentSnapshot<EntityDTO<Data>, EntityDTO<Data>>) =>
            toEntityFormat<Data>(docSnap.data(), docSnap.id)
        )
      ),
      firestoreErrHandler()
    );
  }

  public addDocument(collectionPath: string, data: Data): Observable<Data> {
    const reqBody: EntityDTO<Data> = toServerFormat<Data>(data);
    return defer(() =>
      addDoc(this.getCollectionRef(collectionPath), reqBody)
    ).pipe(
      map((docRef: DocumentReference<EntityDTO<Data>, EntityDTO<Data>>) =>
        toEntityFormat<Data>(reqBody, docRef.id)
      ),
      firestoreErrHandler()
    );
  }

  public upsertDocument(collectionPath: string, data: Data): Observable<Data> {
    const reqBody: EntityDTO<Data> = toServerFormat<Data>(data);
    return defer(() =>
      setDoc(this.getDocumentRef(collectionPath, data.id), reqBody)
    ).pipe(
      map(() => toEntityFormat<Data>(reqBody, data.id)),
      firestoreErrHandler()
    );
  }

  public deleteDocument(collectionPath: string, id: string): Observable<void> {
    return defer(() => deleteDoc(this.getDocumentRef(collectionPath, id))).pipe(
      firestoreErrHandler()
    );
  }
}
