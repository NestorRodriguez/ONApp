import { Component, OnInit, ViewChild, IterableDiffers } from '@angular/core';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { LoadingController, IonInfiniteScroll, ModalController } from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { NgForm } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { SaveInspectionService } from 'src/app/services/save-inspection.service';
import { ModalObsFinalPage } from '../../modal-obs-final/modal-obs-final.page';


@Component({
  selector: 'app-foso',
  templateUrl: './foso.page.html',
  styleUrls: ['./foso.page.scss'],
})
export class FosoPage implements OnInit {

  // ViewChild permite el manejo del DOM de los componentes de ionic
  @ViewChild(IonContent, {static: false}) content: IonContent;
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  public storageToJson: any;
  public listaItems: any;
  public listaCalificacion: any;
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

  public contador = 2;
  public valorActual = 2;

  public SaveInspectionJson: any;

  constructor(private storage: Storage,
              public loadingController: LoadingController,
              private camera: Camera,
              private saveInspectionService: SaveInspectionService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.presentLoading();
    this.calificacion = 'calificacion';
  }

  // Funcion que se ejecuta cuando se abandona la vista
  ionViewDidLeave() {
    console.log('Me fui!');
    this.content.scrollToTop(); // Volver al top del html
    this.infiniteScroll.disabled = false;
    this.list = [];
    this.contador = 2;
    this.valorActual = 2;
    // // Se agregan dos elemntos iniciales al arreglo que permite pintar las cards
    for (let index = 0; index < 2; index++) {
      this.list.push(this.listaItems[index]);
    }
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
      this.listaVerificacion = await this.storageToJson.getJsonStorageList('menuascensores', 'foso');
      this.listaItems = this.listaVerificacion.items;
      for (const item of this.listaItems) {
        this.model.push({
          calificacion: null,
          observacion: null,
          fotografias: []
        });
      }

      // Se agregan dos elemntos iniciales al arreglo que permite pintar las cards
      for (let index = 0; index < 2; index++) {
        this.list.push(this.listaItems[index]);
      }

      this.listaObjects = await this.storageToJson.getJsonStorageObjects('menuascensores');
      console.log(this.listaObjects);
      this.listaCalificacion = this.listaObjects.calificacion;
      this.objectoObservacion = this.listaObjects.c_observaciones;
      await loading.dismiss();
      this.loaded = true;

      console.log('ngOnInit!', this.listaItems);
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
    if (contador === this.listaItems.length) {
      console.log('Items completos!');
      this.listCheck = true;
      // console.log('MODEL', this.model);
    }
    console.log('contador', contador);
  }

  public enviarData(form: NgForm) {
    console.log('formulario: ', form);
    console.log('MODEL', this.model);
  }

  async loadCamera(index: any) {
    // console.log('identificador: ', index);
    const imageList = ['puerta_electrica.png', 'ascensor.gif', 'inspector.png'];
    const options = {
      quality: 25,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      cameraDirection: this.camera.Direction.BACK,
    };
    this.model[index].fotografias.unshift('./../../../../../../assets/img/' + imageList[Math.round(this.getRandomArbitrary(0, 2))]);
    // this.model[index].fotografias.unshift('data:image/jpeg;base64,' + await this.camera.getPicture(options));
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

    setTimeout(() => {

      if (this.contador === cantData) {
        console.log('Finalizo el infinite!');
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

    }, 10);
  }

  addElement(idx: any) {
    const iterator = this.valorActual + idx;
    console.log('iterator: ', iterator);
    for (let index = this.valorActual; index < iterator; index++) {
      if (index < this.listaItems.length) {
        this.list.push(this.listaItems[index]);
      } else {
        this.contador = this.listaItems.length - 5;
      }
    }
    this.valorActual = iterator;
  }

  async viewModel() {
    console.log('Model foso: ', this.model);
    const save = this.saveInspectionService.createModel('foso', this.model);
    console.log('SAVE: ', save);
    if (save) {
      this.loadModalObs();
    }
  }

  async loadModalObs() {
    const modal = await this.modalCtrl.create({
      component: ModalObsFinalPage,
      componentProps: {}
    });
    await modal.present();
    await modal.onDidDismiss();
  }
}
