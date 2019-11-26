import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { IdatosBasicos } from '../../../../../models/Idatosbasicos.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public storageToJson: any;
  datosbasicos: IdatosBasicos;
  listaObjects: any;
  dataLoaded: boolean;
  datospreliminar: any[] = [];
  listaCalificacion: any;
  // listaObjects: any;

  constructor(private storage: Storage,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      // duration: 5000,
      message: 'Cargando...',
      translucent: true,
      // cssClass: 'custom-class custom-loading'
    });

    await loading.present();

    this.storageToJson = new StorageToJson(this.storage);
    try {
    this.listaObjects = await this.storageToJson.getJsonStorageObjects('menuascensores');
    this.datosbasicos = this.listaObjects.datos_basicos;
    this.dataLoaded = true;
    this.datospreliminar = this.listaObjects.datos_preliminar;
    this.listaCalificacion = this.listaObjects.calificacion;
    await loading.dismiss();
    } catch(error) {
      console.log(error);
    }
  }

  public segmentChanged(event: any) {
    console.log('Evento capturado: ', event.detail);
  }

}
