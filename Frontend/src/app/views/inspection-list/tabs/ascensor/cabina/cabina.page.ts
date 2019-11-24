import { Component, OnInit } from '@angular/core';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import { IdatosBasicos } from '../../../../../models/Idatosbasicos.model';


@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.page.html',
  styleUrls: ['./cabina.page.scss'],
})
export class CabinaPage implements OnInit {

  // public dpobservaciones = 'dpobservaciones';
  public storageToJson: any;
  public listaItems: any;
  listaObjects: any;
  dataLoaded = false;

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
      this.listaObjects = await this.storageToJson.getJsonStorageList('menuascensores', 'cabina');
      this.listaItems = this.listaObjects.items;
      this.dataLoaded = true;
      await loading.dismiss();
    } catch (error) {
      console.log(error);
    }

    console.log(this.listaItems);
  }
}
