import { Component, OnInit } from '@angular/core';
import { collectionMock } from './mock';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.page.html',
  styleUrls: ['./inspection-list.page.scss'],
})
export class InspectionListPage implements OnInit {

  public jsonInspection: any;
  public equipo: any;

  public inspeccion = collectionMock;
  // public cabecera = this.inspeccion.datos_basicos;
  // public cabina = this.inspeccion.listas_de_verificacion;
  public datosProteccion = this.inspeccion.datos_proteccion;
  public listasVerificacion: any[]=[];
  public detallesGenerales = this.inspeccion.c_observaciones;
  public calificacion = this.inspeccion.calificacion;
  public dpobservaciones = 'dpobservaciones';

  constructor(private localstorage: Storage,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading().then( response => {
      console.log('RESPONSE', response);
    });

    this.localstorage.get('equipo').then((data) => {
      this.equipo = data;

      if (this.equipo == 'ascensor') {
        console.log("ascensor");
      }
      if (this.equipo == 'puerta') {
        console.log("puerta");
      }
      if (this.equipo == 'escalera') {
        console.log("escalera");
      }
    });
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

    this.localstorage.get('menuascensores').then(async (data) => {
      this.jsonInspection = data;
      this.listasVerificacion = this.jsonInspection.lista_verificacion;
      console.log(this.jsonInspection);
      await loading.dismiss();
    });

    console.log('Loading dismissed!');
  }

}