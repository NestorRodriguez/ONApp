import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-equipment-menu',
  templateUrl: './equipment-menu.page.html',
  styleUrls: ['./equipment-menu.page.scss'],
})

export class EquipmentMenuPage implements OnInit {

  public suscribir: any;

  constructor(private localstorage: Storage,
              private router: Router,
              private platform: Platform,
              private ngZone: NgZone) {
    this.suscribir = this.platform.backButton.subscribe(() => {
      console.log('ruta equipos: ', this.router.url);
      if (this.router.url === '/equipment-menu') {
        this.router.navigateByUrl('/main-menu');
      }
    });
  }

  ngOnInit() {
  }

  setParam(equipo: string) {
    this.localstorage.set('equipo', equipo);
    this.router.navigate(['/inspection-list/tabs/equipo/' + equipo]);
  }
}
