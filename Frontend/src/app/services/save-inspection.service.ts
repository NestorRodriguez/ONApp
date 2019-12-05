import { Injectable } from '@angular/core';
import { InicioPage } from '../views/inspection-list/tabs/ascensor/inicio/inicio.page';
import { Storage } from '@ionic/storage';
import { isNull } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SaveInspectionService {
  arrayInspecciones: any[] = [];
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
    },
    data_final: null
  };
  collectionEmpty = {
    datos_basicos: {},
    lista_verificacion: {
      cabina: [],
      maquina: [],
      pozo: [],
      foso: []
    },
    data_final: null
  };

  constructor( private storage: Storage ) { }

  public async createModel(idxCategoria: string, objeto: any): Promise<boolean> {
    this.contador = 0;
    
    if (idxCategoria === 'datos_basicos') {
      this.collection[idxCategoria] = null;
      console.log('categoria recibida', objeto);
      this.collection.datos_basicos = objeto;
    } else  if ( idxCategoria === 'data_final' ) {
      this.collection[idxCategoria] = objeto;
      await this.saveToStorage();
    } else {
      this.collection.lista_verificacion[idxCategoria] = [];
      for (const item of objeto) {
        this.collection.lista_verificacion[idxCategoria].push(item);
      }
    }
    Object.values(this.collection.lista_verificacion).forEach( value => {
      if (value.length > 0) {
         this.contador ++;
      }
   });
    console.log('contador', this.contador);
    if ( Object.values(this.collection.datos_basicos).length > 0 && this.contador === this.listaLongitud ) {
      this.dataCompleted = true;
    }
    console.log('arrayInspecciones: ', this.collection);
    return this.dataCompleted;
  }

  async saveToStorage() {
    this.arrayInspecciones = await this.storage.get('inspecciones_ascensores');
    if (isNull(this.arrayInspecciones)) {
      this.arrayInspecciones = [];
      this.arrayInspecciones.push(this.collection);
      this.storage.set('inspecciones_ascensores', this.arrayInspecciones);
    } else {
    this.arrayInspecciones.unshift(this.collection);
    this.storage.set('inspecciones_ascensores', this.arrayInspecciones);
    }
    this.collection = this.collectionEmpty;
    this.dataCompleted = false;
  }
}
