import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/services/userdata.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from "@angular/core";

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

  constructor( private auth: AngularFireAuth,
               private router: Router,
               private userData: UserdataService) { }

    async ngOnInit() {
      await this.loadData();
      console.log('entré a la vista menu');
  }

  async loadData() {
    console.log('ENTRÉ  loaddata');
    this.service = this.userData.getUserData().subscribe( user => {
      const arrnombres = user.nombre.split(' ');
      this.nombre = arrnombres[0];
      this.nombres = `${user.nombre} ${user.apellidos}`;
      this.email = user.email;

      console.log('NOMBRES', arrnombres);

    });
  }

  ngOnDestroy() {
    this.service.unsubscribe();
  }

}
