import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveInspectionService {

  collection = {
    lista_verificacion: {
      cabina: [],
      maquina: [],
      pozo: [],
      foso: []
    }
  };

  constructor() { }

  public createModel(idxCategoria: string, objeto: any) {
    this.collection.lista_verificacion[idxCategoria] = [];
    for (const item of objeto){
      this.collection.lista_verificacion[idxCategoria].push(item);
    }
    console.log('Collection', this.collection);
  }
}
