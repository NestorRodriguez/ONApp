import { Storage } from '@ionic/storage';

export class StorageToJson{

  constructor(public storage: Storage) { }
  
  public async getJsonStorageList(coleccion: string, categoria: string){
    const json = await this.storage.get(coleccion);
    let jsonLista = json.lista_verificacion;
    let items: any;
    for(let seccion of jsonLista){
      if (seccion.path === categoria) {
        items = seccion;
      }
    }
    return items;
  }

}