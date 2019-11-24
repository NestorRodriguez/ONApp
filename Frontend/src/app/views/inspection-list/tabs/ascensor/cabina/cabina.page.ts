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

  // public dpobservaciones = 'dpobservaciones';
  public storageToJson: any;
  public listaVerificacion: any;
  public items: any;
  public calificaciones: any;

  constructor(private storage: Storage,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Cargando...',
      translucent: true,
    });

    await loading.present();
    this.storageToJson = new StorageToJson(this.storage);

    await this.storageToJson.getJsonStorageList('menuascensores', 'cabina').then(async (data) => {
      this.listaVerificacion = data;
      this.items = this.listaVerificacion.items;
      await loading.dismiss();
    });

    await this.storageToJson.getJsonStorageObjects('menuascensores').then(async (data) => {
      this.calificaciones = data.calificacion;
      await loading.dismiss();
    });

    console.log('Items: ', this.items);
    console.log('calificacion: ', this.calificaciones);
  }

}
