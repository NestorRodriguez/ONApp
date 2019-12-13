import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { LoadingController, ModalController, ToastController, AlertController, Platform } from '@ionic/angular';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { IdatosBasicos } from '../../../../../models/Idatosbasicos.model';
import { SaveInspectionService } from 'src/app/services/save-inspection.service';
import { ModalObsFinalPage } from '../../modal-obs-final/modal-obs-final.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit, OnDestroy {
  public storageToJson: any;
  datosbasicos: IdatosBasicos;
  listaObjects: any;
  dataLoaded: boolean;
  datospreliminar: any[] = [];
  listaCalificacion: any;
  model: any;
  model2: any;
  elementosProteccion: any[] = [];
  tipos: any;
  objectoObservacion: any;
  listCheck: boolean;
  sliderConfig = {
    spaceBetween: 162,
    centeredSlides: true,
    slidesPerView: 1.6
  };
  elementos: any;
  contador: number;
  keysNull: number;
  dataComplete: boolean;
  dataComplete1: boolean;
  list: any[] = [];
  public contadorList = 2;
  public valorActual = 2;

  constructor(private storage: Storage,
              public loadingController: LoadingController,
              public saveInspectionService: SaveInspectionService,
              private modalCtrl: ModalController,
              public toastController: ToastController,
              private router: Router,
              public alertController: AlertController,
              private platform: Platform,
              private ngZone: NgZone) {
  }

  ngOnInit() {
    this.presentLoading();
    this.model = {
    c_cliente: null,
    c_equipo: null,
    c_empresa: null,
    c_tipoaccion: null,
    c_capacidad: null,
    c_capacidadpersonas: null,
    c_paradas: null,
    c_fecha: null,
    c_fechamto: null,
    c_fechapuestaservicio: null,
    c_fechaultinspeccion: null,
    c_direccioncliente: null,
    c_codigo: null,
    c_consecutivo: '1234',
    datospreliminar: [],
    elementosProteccion: {
      datos_proteccion: {
        inspector: [],
        empresa: []
      }
    },
    elementos: []
    // elementosInspector: [];
    };
    this.keysNull = 0;
  }

  ionViewDidLeave() {
    // this.suscribir = '';
  }
  // Funcion que se ejecuta cuando se abandona la vista
  ngOnDestroy() {
  }

  loadData(event) {
    // console.log('Cargando siguientes...');

    const cantData = this.elementos.length;

    setTimeout(() => {

      if (this.contadorList === cantData) {
        // console.log('Finalizo el infinite!');
        event.target.complete();
        event.target.disabled = true;
        return;
      }

      // this.list.push(this.listaItems[this.contador]);
      this.addElement(this.contadorList);
      this.contadorList += 5;

      event.target.complete();

      // console.log('Nuevo List', this.list);
      // console.log('contadorList: ', this.contadorList);

    }, 1000);
  }

  addElement(idx: any) {
    const iterator = this.valorActual + idx;
    // console.log('iterator: ', iterator);
    for (let index = this.valorActual; index < iterator; index++) {
      if (index < this.elementos.length) {
        this.list.push(this.elementos[index]);
      } else {
        this.contadorList = this.elementos.length - 5;
      }
    }
    this.valorActual = iterator;
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
      this.listaObjects = await this.storageToJson.getJsonStorageObjects('menuascensores');
      this.datosbasicos = this.listaObjects.datos_basicos;
      this.dataLoaded = true;
      this.datospreliminar = this.listaObjects.datos_preliminar;
      this.model.c_codigo = this.datosbasicos.c_codigo.value;
      this.elementosProteccion = this.listaObjects.datos_proteccion.items;
      this.elementos = this.listaObjects.elementos.items;
      this.tipos = this.listaObjects.datos_proteccion.tipo;
      this.objectoObservacion = this.listaObjects.c_observaciones;
      for (const item of this.datospreliminar) {
        this.model.datospreliminar.push({
          calificacion: null,
          observacion: null,
        });
      }
      for ( const item of this.elementosProteccion) {
        this.model.elementosProteccion.datos_proteccion.inspector.push({
          calificacion: null,
          observacion: null,
        });
        this.model.elementosProteccion.datos_proteccion.empresa.push({
          calificacion: null,
        });
      }
      for ( const item of this.elementos) {
        this.model.elementos.push({
          calificacion: null,
        });
      }
      this.listaCalificacion = this.listaObjects.calificacion;
    } catch (error) {
      // console.log(error);
    }
    await loading.dismiss();
  }

  public segmentChanged(event: any) {
    // console.log('Modelo', this.model);
    let contador = 0;
    for (const item of this.model.datospreliminar) {
      if (item.calificacion != null) {
        contador++;
      }
    }
    for (const item1 of this.model.elementosProteccion.datos_proteccion.inspector) {
        if (item1.calificacion != null) {
          contador++;
        }
      }
    for (const item2 of this.model.elementosProteccion.datos_proteccion.empresa) {
          if (item2.calificacion != null) {
            contador++;
          }
        }
    for (const item3 of this.model.elementos) {
          if (item3.calificacion != null) {
            contador++;
          }
        }
    if ( contador === this.countLength()) {
          this.listCheck = true;
          this.dataComplete1 = true;
        }
    // // console.log('cantidad de keys ', Object.keys(this.model).length);
    // console.log('Evento capturado: ', contador);
      // // console.log('MODEL', this.model);
    }

    countLength() {
      const total = this.datospreliminar.length + ( this.elementosProteccion.length * 2 ) + this.elementos.length;
      // console.log('TOTAL', total);
      return total;
  }

  async enviarData() {
    // console.log('Model cabina: ', this.model);
    const save = await this.saveInspectionService.createModel('datos_basicos', this.model);
    // console.log('SAVE', save);
    const mensaje = 'Datos iniciales guardados con éxito!';
    this.presentToast(mensaje);
    this.listCheck = false; // Desaparece el icono
    if (save) {
      this.loadModalObs();
    }
  }
    mostrarData() {
    // console.log(this.model);
  }

  async loadModalObs() {
    const modal = await this.modalCtrl.create({
      component: ModalObsFinalPage,
      componentProps: {}
    });
    await modal.present();
    await modal.onDidDismiss();
  }

  validateModel() {
    this.keysNull = 0;
    Object.values(this.model).forEach(element => {
      if ( element === null || element === '' ) {
        this.keysNull++;
      }
    });
    if (this.keysNull === 0) {
      this.dataComplete = true;
      if (this.dataComplete1 === true) { // Se ejecuta solo Si estan llenos los check
        this.listCheck = true; // Si se modifica el valor se muestra el icono de guardar
      }
    } else {
      this.dataComplete = false;
    }
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      cssClass: 'toast-container',
      duration: 2000,
      position: 'middle',
      animated: true
    });
    toast.present();
  }

  fillDataTest() {

      this.model.c_cliente = 'Edificio Av Chile';
      this.model.c_equipo = 'Ascensor 16';
      this.model.c_empresa = 'MTS';
      this.model.c_tipoaccion = 'Hidráulico';
      this.model.c_capacidad = '10';
      this.model.c_capacidadpersonas = '1200';
      this.model.c_paradas = '22';
      this.model.c_fecha = '';
      this.model.c_fechamto = '2019-12-01T09:23:21.037-05:00';
      this.model.c_fechapuestaservicio = '2018-12-01T09:23:21.037-05:00';
      this.model.c_fechaultinspeccion = '2018-08-01T09:23:21.037-05:00';
      this.model.c_direccioncliente = 'Cra 7 # 71 - 21';
      this.model.c_codigo = 'IN-R-08';
      this.model.c_consecutivo = '1234';
      for (const item of this.model.datospreliminar) {
        item.calificacion = Math.round(this.getRandomArbitrary(0, 2));
      }
      for (const item of this.model.elementosProteccion.datos_proteccion.inspector) {
        item.calificacion = Math.round(this.getRandomArbitrary(0, 2));
      }
      for (const item of this.model.elementosProteccion.datos_proteccion.empresa) {
        item.calificacion = Math.round(this.getRandomArbitrary(0, 2));
      }
      for (const item of this.model.elementos) {
        item.calificacion = Math.round(this.getRandomArbitrary(0, 2));
      }
      this.listCheck = true;
}
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      message: '¿Realmente desea salir?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.router.navigateByUrl('/equipment-menu');
          }
        }
      ]
    });

    await alert.present();
  }
}
