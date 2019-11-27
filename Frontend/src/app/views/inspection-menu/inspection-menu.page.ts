import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspection-menu',
  templateUrl: './inspection-menu.page.html',
  styleUrls: ['./inspection-menu.page.scss'],
})
export class InspectionMenuPage implements OnInit {

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando siguientes...');

    setTimeout(() => {

      if (this.data.length > 30) {
        event.target.complete();
        event.target.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1000);
  }

}
