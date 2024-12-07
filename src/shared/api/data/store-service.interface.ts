import { Observable } from "rxjs";

export interface StoreService<Entity extends { id: string }> {
  getDocuments(
    collectionPath: string,
    ...queries: unknown[]
  ): Observable<Entity[]>;

  addDocument(collectionPath: string, data: Entity): Observable<Entity>;

  upsertDocument(collectionPath: string, data: Entity): Observable<Entity>;

  deleteDocument(collectionPath: string, id: string): Observable<void>;
}
