import { Component, OnInit } from '@angular/core';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.page.html',
  styleUrls: ['./cabina.page.scss'],
})
export class CabinaPage implements OnInit {

  // public listasVerificacion = this.inspeccion.lista_verificacion;
  // public dpobservaciones = 'dpobservaciones';

  public storageToJson: any;
  public listaItems: any;

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

    this.listaItems = await this.storageToJson.getJsonStorageList('menuascensores', 'cabina');

    console.log('json: ',this.listaItems);

    await loading.dismiss();

  }

}
