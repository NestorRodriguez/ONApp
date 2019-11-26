import { Component, OnInit } from '@angular/core';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.page.html',
  styleUrls: ['./cabina.page.scss'],
})
export class CabinaPage implements OnInit {

  public storageToJson: any;
  public listaItems: any;
  public listaCalificacion: any;
  public checkValue = 'dpobservaciones';
  public objectoObservacion: any;
  public listCheck: boolean;
  listaVerificacion: any;
  listaObjects: any;
  model: any = [];
  loaded = false;
  calificacion: any;
  cantidadChecks: any;
  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.6
  };

  constructor(private storage: Storage,
              public loadingController: LoadingController,
              private camera: Camera) { }

  ngOnInit() {
    this.presentLoading();
    this.calificacion = 'calificacion';
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
      this.listaVerificacion = await this.storageToJson.getJsonStorageList('menuascensores', 'cabina');
      this.listaItems = this.listaVerificacion.items;
      for (const item of this.listaItems) {
        this.model.push({
          calificacion: null,
          observacion: null,
          fotografias: []
        });
      }

      this.listaObjects = await this.storageToJson.getJsonStorageObjects('menuascensores');
      console.log(this.listaObjects);
      this.listaCalificacion = this.listaObjects.calificacion;
      this.objectoObservacion = this.listaObjects.c_observaciones;
      await loading.dismiss();
      this.loaded = true;
    } catch (error) {
      console.log(error);
    }

    console.log(this.listaItems);
  }

  public segmentChanged(event: any, index: any) {
    let contador = 0;
    for (const item of this.model) {
      if (item.calificacion != null) {
        contador++;
      }
    }
    if (contador === 35) {
      console.log('Items completos!');
      this.listCheck = true;
      // console.log('MODEL', this.model);
    }
  }

  public enviarData(form: NgForm) {
    console.log('formulario: ', form);
    console.log('MODEL', this.model);
  }

  async loadCamera(index: any) {
    // console.log('identificador: ', index);
    const options = {
      quality: 25,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      cameraDirection: this.camera.Direction.BACK,
    };
    // this.model[index].fotografias.unshift('./../../../../../../assets/img/ascensor.gif');
    this.model[index].fotografias.unshift('data:image/jpeg;base64,' + await this.camera.getPicture(options));
    console.log('Fotos: ', this.model[index].fotografias);
  }

  // funcion para dejar valores de check por defecto
  fillDataTest() {
    for (const item of this.model) {
      item.calificacion = Math.round(this.getRandomArbitrary(0, 2));

    }
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}
