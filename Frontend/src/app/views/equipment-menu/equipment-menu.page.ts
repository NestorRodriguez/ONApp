import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-equipment-menu',
  templateUrl: './equipment-menu.page.html',
  styleUrls: ['./equipment-menu.page.scss'],
})
export class EquipmentMenuPage implements OnInit {

  constructor(private localstorage: Storage) { }

  ngOnInit() {
    
  }

  setParam(equipo:string){
    this.localstorage.set('equipo', equipo);
  }

}
