import { Component, OnInit } from '@angular/core';
import { QueriesService } from '../../services/queries.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {
  inspecciones: any;
  constructor( private firebaseService: QueriesService) { }

  ngOnInit() {
    this.firebaseService.queryAllCollection('inspecciones_ascensores').subscribe( data => {
      // console.log('reportes', data);
      this.inspecciones = data;
    })
  }

}
