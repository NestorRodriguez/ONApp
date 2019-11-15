import { Component, OnInit } from '@angular/core';
import { collectionMock } from './mock';
@Component({
  selector: 'app-inspection-menu',
  templateUrl: './inspection-menu.page.html',
  styleUrls: ['./inspection-menu.page.scss'],
})
export class InspectionMenuPage implements OnInit {
  public inspeccion = collectionMock;
  // public cabecera = this.inspeccion.datos_basicos;
  // public cabina = this.inspeccion.listas_de_verificacion;
  public datosProteccion = this.inspeccion.datos_proteccion;
  public listasVerificacion = this.inspeccion.lista_verificacion;
  public detallesGenerales = this.inspeccion.c_observaciones;
  public calificacion = this.inspeccion.calificacion;
  public dpobservaciones = 'dpobservaciones';
  constructor() { }

  ngOnInit() {
    console.log(this.inspeccion);
  }

}
