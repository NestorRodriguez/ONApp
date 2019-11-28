import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage';

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
  sliderConfig = {
    spaceBetween: 115,
    centeredSlides: true,
    slidesPerView: 1.6
  };

  constructor( private localstorage: Storage) { }

     async ngOnInit() {
      const user = await this.loadData();
      const arrnombres = user.nombre.split(' ');
      this.nombre = arrnombres[0];
      this.nombres = `${user.nombre} ${user.apellidos}`;
      this.email = user.email;
      console.log('NOMBRES', arrnombres);

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
