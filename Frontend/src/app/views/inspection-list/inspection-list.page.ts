import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController, AlertController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.page.html',
  styleUrls: ['./inspection-list.page.scss'],
})
export class InspectionListPage implements OnInit {

  public jsonInspection: any;
  public equipo: any;
  public listasVerificacion: any[] = [];
  alert: any;
  public suscribir: any;
  public alertShow: boolean;

  constructor(private localstorage: Storage,
              public loadingController: LoadingController,
              private router: Router,
              public alertController: AlertController,
              private platform: Platform) {
    this.suscribir = this.platform.backButton.subscribeWithPriority(666666, () => {
      if (this.router.url === '/inspection-list/tab/ascensor/inicio' ||
          this.router.url === '/inspection-list/tab/ascensor/cabina' ||
          this.router.url === '/inspection-list/tab/ascensor/maquina' ||
          this.router.url === '/inspection-list/tab/ascensor/pozo' ||
          this.router.url === '/inspection-list/tab/ascensor/foso') {
        if (!this.alertShow) {
          this.presentAlert();
        } else {
          this.alert.dismiss();
          this.presentAlert();
        }
      }
    });
  }

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

  async presentAlert() {
    this.alertShow = true;
    this.alert = await this.alertController.create({
      header: '',
      message: '¿Realmente desea salir?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.alertShow = false;
            this.router.navigateByUrl('/equipment-menu');
          }
        }
      ]
    });

    await this.alert.present();
  }

}
