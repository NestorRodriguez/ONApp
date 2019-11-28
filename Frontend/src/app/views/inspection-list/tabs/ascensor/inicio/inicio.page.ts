import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { IdatosBasicos } from '../../../../../models/Idatosbasicos.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public storageToJson: any;
  datosbasicos: IdatosBasicos;
  listaObjects: any;
  dataLoaded: boolean;
  datospreliminar: any[] = [];
  listaCalificacion: any;
  model: any;
  elementosProteccion: any[] = [];
  tipos: any;
  objectoObservacion: any;
  sliderConfig = {
    spaceBetween: 162,
    centeredSlides: true,
    slidesPerView: 1.6
  };
  elementos: any;

  // listaObjects: any;

  constructor(private storage: Storage,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading();
    this.model = {
    c_cliente: null,
    c_equipo: null,
    c_empresa: null,
    c_tipoaccion: null,
    c_capacidad: null,
    c_paradas: null,
    c_fecha: null,
    c_fechamto: null,
    c_fechapuestaservicio: null,
    c_fechaultinspeccion: null,
    c_direccioncliente: null,
    c_codigo: null,
    c_consecutivo: null,
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
    for( const item of this.elementosProteccion) {
      this.model.elementosProteccion.datos_proteccion.inspector.push({
        calificacion: null,
        observacion: null,
      });
      this.model.elementosProteccion.datos_proteccion.empresa.push({
        calificacion: null,
      });
    }
    for( const item of this.elementos) {
      this.model.elementos.push({
        calificacion: null,
      })
    }
    this.listaCalificacion = this.listaObjects.calificacion;
  } catch (error) {
    console.log(error);
  }
    await loading.dismiss();
}

  public segmentChanged(event: any) {
    console.log('Evento capturado: ', event.detail);
  }

  enviarData(form: any){
    console.log(form);
  }
  mostrarData() {
    
    console.log(this.model);
  }

}
