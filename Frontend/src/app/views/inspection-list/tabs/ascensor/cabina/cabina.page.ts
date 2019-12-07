import { Component, OnInit, ViewChild, IterableDiffers } from '@angular/core';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { LoadingController, IonInfiniteScroll, ModalController, ToastController } from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { NgForm } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { SaveInspectionService } from 'src/app/services/save-inspection.service';
import { ModalObsFinalPage } from '../../modal-obs-final/modal-obs-final.page';


@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.page.html',
  styleUrls: ['./cabina.page.scss'],
})
export class CabinaPage implements OnInit {

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
  itemsCheck = 0;

  data: any[] = Array(20);

  list: any[] = [];

  public contador = 2;
  public valorActual = 2;

  public SaveInspectionJson: any;

  constructor(private storage: Storage,
              public loadingController: LoadingController,
              private camera: Camera,
              private saveInspectionService: SaveInspectionService,
              private modalCtrl: ModalController,
              public toastController: ToastController) { }

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
    // // Se agregan dos elementos iniciales al arreglo que permite pintar las cards
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
      this.listaVerificacion = await this.storageToJson.getJsonStorageList('menuascensores', 'cabina');
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
    this.itemsCheck = 0;
    for (const item of this.model) {
      if (item.calificacion != null) {
        this.itemsCheck++;
      }
    }
    if (this.itemsCheck === this.listaItems.length) {
      console.log('Items completos!');
      this.listCheck = true;
      // console.log('MODEL', this.model);
    }
    console.log('contador', this.itemsCheck);
  }

  public enviarData(form: NgForm) {
    console.log('formulario: ', form);
    console.log('MODEL', this.model);
  }

  async loadCamera(index: any) {
    // console.log('identificador: ', index);
    const imageList = ['puerta_electrica.png', 'ascensor.gif', 'inspector.png'];
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
      this.model[index].fotografias.unshift('data:image/jpeg;base64,' + imageData);
      this.SaveModel('Foto');
     }, (err) => {
      // Handle error
      console.log('Error: ', err);
     });
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

  async SaveModel(ruta: string) {
    console.log('Model cabina: ', this.model);
    const save = await this.saveInspectionService.createModel('cabina', this.model);
    console.log('SAVE: ', save);
    if (ruta === 'icon') {
      const mensaje = 'Lista de verificación cabina guardada con éxito!';
      this.presentToast(mensaje);
      this.listCheck = false; // Desaparece el icono
    } else {
      const mensaje = 'Fotografía guardada con éxito!';
      this.presentToast(mensaje);
    }
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

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
