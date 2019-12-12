import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { QueriesService } from 'src/app/services/queries.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';

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
  mensajeError: string;
  urls: any[] = [];
  mensajeSuccess: string;
  constructor( private storage: Storage,
               private serviceFirebase: QueriesService,
               public loadingController: LoadingController,
               public toastController: ToastController,
               public firebaseStorage: AngularFireStorage ) { }

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
    await this.uploadPictures();
    await loading.dismiss();

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
      this.mensajeSuccess = 'Guardado con éxito';
      this.presentToast(this.mensajeSuccess);
      this.success = true;
    }, (error) => {
      this.success = false;
      console.log('Ocurrió un error al guardar la inspección', error);
      this.mensajeError = 'Ocurrió un error, inténtalo más tarde ' + error;
      this.presentToast(this.mensajeError);
    });
      // console.log(this.jsonInspection);
    await loading.dismiss();
    if (this.success) {
      this.presentToast(this.mensajeSuccess);
    } else {
      this.presentToast(this.mensajeError);
    }

    }

    async presentToast(mensaje: string) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 2000
      });
      toast.present();
    }

    async uploadPictures() {
      for ( const inspeccion of this.inspecciones) {
        const inspeccionId = inspeccion.datos_basicos.c_consecutivo;
        console.log(inspeccion);
        const listas = inspeccion.lista_verificacion;
        const keys = Object.keys(listas);
        const categorias: any[] = Object.values(listas);
        for( const categoria of categorias ) {
          const ruta = keys[categorias.indexOf(categoria)];
          for ( const item of categoria) {
            const index = (categoria.indexOf(item) + 1);
            if ( item.fotografias.length > 0 ) {
              for ( const foto of item.fotografias) {
              const indexFoto = (item.fotografias.indexOf(foto) + 1);
              const indexUrl = item.fotografias.indexOf(foto);
              const guardarImagenes = this.firebaseStorage.ref(`pictures/inspeccion#${inspeccionId}/${ruta}/item${index}-${indexFoto}`);
              const url = await guardarImagenes.putString(foto, 'data_url').then( async () => {
                const link = guardarImagenes.getDownloadURL().subscribe( async (urlfoto) => {
                  item.fotografias[indexUrl] = urlfoto;
                  this.urls.push(urlfoto);
                });
              });
          }
        } else {
          console.log('No hay fotografías para cargar');
        }
      }
        }
        await this.serviceFirebase.createInspection(inspeccion).then( () => {
          this.success = true;
        }, (error) => {
          this.success = false;
          const msgerror = 'Ocurrió un error al guardar la inspección' + error;
          this.presentToast(msgerror);
        });
        if (this.success) {
          this.inspecciones = [];
          this.storage.set('inspecciones_ascensores', this.inspecciones);
          const mensajeSuccess = `Inspeccion ${inspeccionId} guardadas con éxito`;
          this.presentToast(mensajeSuccess);
        } else {
          const mensajeError = 'Ocurrió un error, inténtalo más tarde ';
          this.presentToast(mensajeError);
    }
      }
    }

  }

