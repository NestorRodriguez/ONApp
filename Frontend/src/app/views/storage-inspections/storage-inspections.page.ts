import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-storage-inspections',
  templateUrl: './storage-inspections.page.html',
  styleUrls: ['./storage-inspections.page.scss'],
})
export class StorageInspectionsPage implements OnInit {

  dataLoaded: boolean;
  inspecciones: any[] = [];
  constructor( private storage: Storage ) { }

  ngOnInit() {
    console.log('entre a la vista');
    this.storage.get('inspecciones_ascensores').then( data => {
      this.dataLoaded = true;
      this.inspecciones = data;
      console.log(this.inspecciones);
    });

  }

}
