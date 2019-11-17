import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-menu',
  templateUrl: './equipment-menu.page.html',
  styleUrls: ['./equipment-menu.page.scss'],
})
export class EquipmentMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setParam(equipo:string){    
    localStorage.setItem('equipo', equipo);
  }

}
