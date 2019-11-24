import { Component, OnInit } from '@angular/core';
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
  public listasVerificacion: any[] = [];

  constructor(private localstorage: Storage,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.equipmentLoading();
  }

  async equipmentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      // duration: 5000,
      message: 'Cargando...',
      translucent: true,
      // cssClass: 'custom-class custom-loading'
    });

    await loading.present();
    await this.getStorage();
    await loading.dismiss();
  }

  async getStorage() {
    const data = await this.localstorage.get('equipo');
    this.equipo = data;

    if (this.equipo === 'ascensor') {
      console.log('ascensor');
      this.menuLoading('menuascensores');
    }
    if (this.equipo === 'puerta') {
      console.log('puerta');
      this.menuLoading('menuascensores');
    }
    if (this.equipo === 'escalera') {
      console.log('escalera');
    }

  }

  async menuLoading(menu: string) {
    console.log('menu: ', menu);
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      // duration: 5000,
      message: 'Cargando...',
      translucent: true,
      // cssClass: 'custom-class custom-loading'
    });

    await loading.present();

    this.localstorage.get(menu).then(async (data) => {
      this.jsonInspection = data;
      this.listasVerificacion = this.jsonInspection.lista_verificacion;
      // console.log(this.jsonInspection);
      await loading.dismiss();
    });

    // console.log('Loading dismissed!');
  }

}
