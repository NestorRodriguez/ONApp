import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { LoadingController, IonInfiniteScroll } from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.page.html',
  styleUrls: ['./cabina.page.scss'],
})
export class CabinaPage implements OnInit {

  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

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

  data: any[] = Array(20);

  list: any[] = [];

  contador = 2;
  valorActual = 2;

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

      for (let index = 0; index < 2; index++) {
        this.list.push(this.listaItems[index]);
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
    console.log('list: ', this.list);
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

  loadData(event) {
    console.log('Cargando siguientes...');

    const cantData = this.listaItems.length;

    console.log('cantData: ', cantData);

    setTimeout(() => {

      if (this.contador === cantData) {
        console.log('Entro al if!');
        event.target.complete();
        event.target.disabled = true;
        return;
      }

      // this.list.push(this.listaItems[this.contador]);
      this.addElement(this.contador);
      this.contador += 5;

      event.target.complete();

      console.log('Nuevo List', this.list);
      console.log('contador: ', this.contador);

    }, 1000);
  }

  addElement(idx: any) {
    const iterator = this.valorActual + idx;
    for (let index = this.valorActual; index < iterator; index++) {
      if (index < this.listaItems.length) {
        this.list.push(this.listaItems[index]);
      } else {
        this.contador = this.listaItems.length - 5;
      }
    }
    this.valorActual = iterator;
  }
}
