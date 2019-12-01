export class SaveInspectionJson {
    collection = {
        lista_verificacion: {
            cabina: [],
            maquina: [],
            pozo: [],
            foso: []
        }
    };

    public createModel(idxCategoria: string, objeto: any) {
        for (const item of objeto){
            this.collection.lista_verificacion[idxCategoria].push(item);
        }
        console.log(this.collection);
    }
}
