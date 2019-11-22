import { Storage } from '@ionic/storage';

export class StorageToJson {

  constructor(public storage: Storage) { }
  // Metodo para buscar una categoria específica de las listas de verificación de la colección
  public async getJsonStorageList(coleccion: string, categoria: string) {
    const json = await this.storage.get(coleccion);
    const jsonLista = json.lista_verificacion;
    let items: any;
    // Buscamos que la propiedad path sea igual a la categoría recibida por el método
    for (const seccion of jsonLista) {
      if (seccion.path === categoria) {
        items = seccion;
      }
    }
    return items;
  }

  public async getJsonStorageObjects(coleccion: string) {
    const json = await this.storage.get(coleccion);
    delete json.lista_verificacion;
    return json;
  }

}