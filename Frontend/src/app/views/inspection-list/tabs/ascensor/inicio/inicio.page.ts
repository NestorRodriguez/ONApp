import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public storageToJson: any;
  listaObjects: any;

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

    this.listaObjects = await this.storageToJson.getJsonStorageObjects('menuascensores');

    console.log('json: ', this.listaObjects);

    await loading.dismiss();

  }

}
