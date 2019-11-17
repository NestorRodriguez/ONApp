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
  public tab1 = {
    title: '',
    tab : ''
  };
  public tab2 = {
    title: '',
    tab: ''
  };
  public tab3 = {
    title: '',
    tab: ''
  };
  public tab4 = {
    title: '',
    tab: ''
  };

  constructor(private activedRoute: ActivatedRoute,
              private navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
    var equipo = localStorage.getItem('equipo');

    if (equipo == 'ascensor') {
      this.tab1.title = 'Cabina';
      this.tab1.tab = 'cabina';

      this.tab2.title = 'Máquinas';
      this.tab2.tab = 'maquinas';

      this.tab3.title = 'Pozo';
      this.tab3.tab = 'pozo';

      this.tab4.title = 'Foso';
      this.tab4.tab = 'foso';
      console.log(this.tab1);

    }
  }

}