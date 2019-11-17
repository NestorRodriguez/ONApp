import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {
  
  nombre: string;
  nombres: string;
  email: string;
  sliderConfig = {
    spaceBetween: 115,
    centeredSlides: true,
    slidesPerView: 1.6
  };

  constructor( private auth: AngularFireAuth,
    private router: Router,
    private userData: UserdataService,) { }

    ngOnInit() {
      const userData: any = this.userData.getUserData();
      const arrnombres = userData.nombre.split(' ');
      this.nombre = arrnombres[0];
      this.nombres = `${userData.nombre} ${userData.apellidos}`;
      this.email = userData.email;
  }

}
