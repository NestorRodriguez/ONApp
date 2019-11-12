import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor( private database: AngularFirestore ) { }

   queryCollection(collection: string, query: any) {
     console.log('QUERY', query);
     const result =  this.database.collection(collection, data => data.where(query.campo, query.condicion, query.valor)).valueChanges();
     return result;
    }
}
