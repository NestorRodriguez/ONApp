import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-modal-obs-final',
  templateUrl: './modal-obs-final.page.html',
  styleUrls: ['./modal-obs-final.page.scss'],
})
export class ModalObsFinalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss({
      ubicacion: {lat: '0', lng: '1'}
    });
  }

}
