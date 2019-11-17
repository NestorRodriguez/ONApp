import { Component, OnInit } from '@angular/core';
import { collectionMock } from './mock';
import { ActivatedRoute } from '@angular/router';
import {NavController, AlertController, ModalController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.page.html',
  styleUrls: ['./inspection-list.page.scss'],
})
export class InspectionListPage implements OnInit {

  public inspeccion = collectionMock;
  // public cabecera = this.inspeccion.datos_basicos;
  // public cabina = this.inspeccion.listas_de_verificacion;
  public datosProteccion = this.inspeccion.datos_proteccion;
  public listasVerificacion = this.inspeccion.lista_verificacion;
  public detallesGenerales = this.inspeccion.c_observaciones;
  public calificacion = this.inspeccion.calificacion;
  public dpobservaciones = 'dpobservaciones';

  equipo = null;

  constructor(private activedRoute: ActivatedRoute,
              private navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
    console.log(this.inspeccion);
    this.equipo = this.activedRoute.snapshot.paramMap.get('equipo');
    console.log("ruta -> "+this.equipo);

    if (this.equipo == 'ascensor') {
      console.log(this.equipo);
      // this.navCtrl.navigateBack('inspection-list/ana/cabina');
      this.router.navigate(['/inspection-list/tab/cabina']);
    }
  }

}
