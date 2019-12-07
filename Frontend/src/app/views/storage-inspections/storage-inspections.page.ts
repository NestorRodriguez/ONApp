import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { QueriesService } from 'src/app/services/queries.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-storage-inspections',
  templateUrl: './storage-inspections.page.html',
  styleUrls: ['./storage-inspections.page.scss'],
})
export class StorageInspectionsPage implements OnInit {

  dataLoaded: boolean;
  inspecciones: any[] = [];
  success: boolean;
  isData: boolean;
  constructor( private storage: Storage,
               private serviceFirebase: QueriesService,
               public loadingController: LoadingController,
               public toastController: ToastController ) { }

  ngOnInit() {
    console.log('entre a la vista');
  }

  ionViewDidEnter() {
    this.storage.get('inspecciones_ascensores').then( data => {
      this.dataLoaded = true;
      this.inspecciones = data;
      if (this.inspecciones.length > 0) {
        this.isData = true;
      }
    });
  }

  async uploadAllData() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      // duration: 5000,
      message: 'Subiendo inspecciones, por favor espere...',
      translucent: true,
      // cssClass: 'custom-class custom-loading'
    });

    await loading.present();
    for ( const inspeccion of this.inspecciones) {
    await this.serviceFirebase.createInspection(inspeccion).then( () => {
      this.success = true;
    }, (error) => {
      this.success = false;
      console.log('Ocurrió un error al guardar la inspección', error);
    });
  }
      // console.log(this.jsonInspection);
    await loading.dismiss();
    if (this.success) {
      this.inspecciones = [];
      this.storage.set('inspecciones_ascensores', this.inspecciones);
      const mensajeSuccess = 'Inspecciones guardadas con éxito';
      this.presentToast(mensajeSuccess);
    } else {
      const mensajeError = 'Ocurrió un error, inténtalo más tarde';
      this.presentToast(mensajeError);
    }

  }

  async uploadByItem(id: number) {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      // duration: 5000,
      message: 'Subiendo inspección, por favor espere...',
      translucent: true,
      // cssClass: 'custom-class custom-loading'
    });

    await loading.present();
    await this.serviceFirebase.createInspection(this.inspecciones[id]).then( () => {
      this.inspecciones.splice(id, 1);
      this.storage.set('inspecciones_ascensores', this.inspecciones);
      const mensajeSuccess = 'Guardado con éxito';
      this.presentToast(mensajeSuccess);
      this.success = true;
    }, (error) => {
      this.success = false;
      console.log('Ocurrió un error al guardar la inspección', error);
      const mensajeError = 'Ocurrió un error, inténtalo más tarde';
      this.presentToast(mensajeError);
    });
      // console.log(this.jsonInspection);
    await loading.dismiss();
    if (this.success) {
      const mensajeSuccess = 'Inspeccion guardada con éxito';
      this.presentToast(mensajeSuccess);
    } else {
      const mensajeError = 'Ocurrió un error, inténtalo más tarde';
      this.presentToast(mensajeError);
    }

    }

    async presentToast(mensaje: string) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 2000
      });
      toast.present();
    }

  }

