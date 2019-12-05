import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';
import { isNull } from 'util';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {
  nombre: string;
  nombres: string;
  email: string;
  service: Subscription;
  inspeccionesToLoad: boolean;
  sliderConfig = {
    spaceBetween: 115,
    centeredSlides: true,
    slidesPerView: 1.6
  };
  countInspecciones = 0;

  constructor( private localstorage: Storage) { }

     async ngOnInit() {
      const user = await this.loadData();
      const arrnombres = user.nombre.split(' ');
      this.nombre = arrnombres[0];
      this.nombres = `${user.nombre} ${user.apellidos}`;
      this.email = user.email;
      console.log('NOMBRES', arrnombres);

    }
    ionViewDidEnter() {
      this.localstorage.get('inspecciones_ascensores').then( data => {
        if (isNull(data) || data.length === 0 ) {
          this.inspeccionesToLoad = false;
        } else {
          this.inspeccionesToLoad = true;
          this.countInspecciones = data.length;
        }

      });
    }
  //   async ionViewDidEnter() {
  //     const user = await this.loadData();
  //     const arrnombres = user.nombre.split(' ');
  //     this.nombre = arrnombres[0];
  //     this.nombres = `${user.nombre} ${user.apellidos}`;
  //     this.email = user.email;
  //     console.log('NOMBRES', arrnombres);

  // }
  async loadData() {
    const user: any =  await this.localstorage.get('userlogged');
    return user;
  }

}
