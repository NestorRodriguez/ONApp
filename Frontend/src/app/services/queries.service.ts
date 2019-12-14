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
   queryAllCollection(collection: string) {
     const result =  this.database.collection(collection).valueChanges();
     return result;
    }

    createInspection(data: any) {
      data = JSON.stringify(data);
      data = JSON.parse(data);
      console.log('Voy a enviar esta coleccion', data);
      return this.database.collection('inspecciones_ascensores').add(data);
    }
}
