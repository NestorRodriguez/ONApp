import { Injectable } from '@angular/core';
import { InicioPage } from '../views/inspection-list/tabs/ascensor/inicio/inicio.page';

@Injectable({
  providedIn: 'root'
})
export class SaveInspectionService {
  listaLongitud = 4;
  dataCompleted: boolean;
  contador: number;
  collection = {
    datos_basicos: {},
    lista_verificacion: {
      cabina: [],
      maquina: [],
      pozo: [],
      foso: []
    }
  };

  constructor() { }

  public createModel(idxCategoria: string, objeto: any): boolean {
    this.contador = 0;
    Object.values(this.collection.lista_verificacion).forEach( value => {
       if (value.length > 0) {
          this.contador ++;
       }
    });
    if (idxCategoria === 'datos_basicos') {
      this.collection[idxCategoria] = null;
      console.log('categoria recibida', objeto);
      this.collection.datos_basicos = objeto;
    } else {
      this.collection.lista_verificacion[idxCategoria] = [];
      for (const item of objeto) {
        this.collection.lista_verificacion[idxCategoria].push(item);
      }
    }

    if ( Object.values(this.collection.datos_basicos) && this.contador === this.listaLongitud ) {
      this.dataCompleted = true;
    }

    return this.dataCompleted;
  }
}
