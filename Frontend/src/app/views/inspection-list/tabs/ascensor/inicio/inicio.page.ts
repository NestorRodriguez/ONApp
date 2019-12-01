import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StorageToJson } from '../../../../../models/StorageToJson';
import { Storage } from '@ionic/storage';
import { IdatosBasicos } from '../../../../../models/Idatosbasicos.model';
import { isNull } from 'util';
import { empty } from 'rxjs';

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
  dataComplete1 = true;
  list: any[] = [];
  public contadorList = 2;
  public valorActual = 2;

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

  loadData(event) {
    console.log('Cargando siguientes...');

    const cantData = this.elementos.length;

    setTimeout(() => {

      if (this.contadorList === cantData) {
        console.log('Finalizo el infinite!');
        event.target.complete();
        event.target.disabled = true;
        return;
      }

      // this.list.push(this.listaItems[this.contador]);
      this.addElement(this.contadorList);
      this.contadorList += 5;

      event.target.complete();

      console.log('Nuevo List', this.list);
      console.log('contadorList: ', this.contadorList);

    }, 1000);
  }

  addElement(idx: any) {
    const iterator = this.valorActual + idx;
    console.log('iterator: ', iterator);
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
      console.log(error);
    }
    await loading.dismiss();
  }

  public segmentChanged(event: any) {
    console.log('Modelo', this.model);
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
        }
    // console.log('cantidad de keys ', Object.keys(this.model).length);
    console.log('Evento capturado: ', contador);
      // console.log('MODEL', this.model);
    }

    countLength() {
      const total = this.datospreliminar.length + ( this.elementosProteccion.length * 2 ) + this.elementos.length;
      console.log('TOTAL', total);
      return total;
  }

    enviarData(form: any) {
    console.log(form);
  }
    mostrarData() {
    console.log(this.model);
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
    } else {
      this.dataComplete = false;
    }
  }

}
