import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoadinitdataService {

  constructor( private dataBase: AngularFirestore) { }

  downloadData() {
   const query = this.dataBase.collection('inspecciones').doc('ascensores').valueChanges();

   return query;
  }

}
