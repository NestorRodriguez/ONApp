import { Component, OnInit } from '@angular/core';
import { collectionMock } from './mock';
@Component({
  selector: 'app-inspection-menu',
  templateUrl: './inspection-menu.page.html',
  styleUrls: ['./inspection-menu.page.scss'],
})
export class InspectionMenuPage implements OnInit {
  public inspeccion = collectionMock;
  public cabecera = this.inspeccion.cabecera;
  public cabina = this.inspeccion.listas_de_verificacion;
  constructor() { }

  ngOnInit() {
    console.log(this.inspeccion);
  }

}
