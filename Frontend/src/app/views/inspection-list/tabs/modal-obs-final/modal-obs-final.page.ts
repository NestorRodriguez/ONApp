import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { NgForm } from '@angular/forms';
import { SaveInspectionService } from 'src/app/services/save-inspection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-obs-final',
  templateUrl: './modal-obs-final.page.html',
  styleUrls: ['./modal-obs-final.page.scss'],
})
export class ModalObsFinalPage implements OnInit {

  model: any;
  sliderConfig = {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.6
  };

  constructor(private modalCtrl: ModalController,
              private camera: Camera,
              private saveInspectionService: SaveInspectionService,
              private router: Router) { }

  ngOnInit() {
    this.model = {
      observacionFinal: null,
      fotosFinal: []
    };
  }

  async loadCamera(index: any) {
    // console.log('identificador: ', index);
    const imageList = ['puerta_electrica.png', 'ascensor.gif', 'inspector.png'];
    const options = {
      quality: 25,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      cameraDirection: this.camera.Direction.BACK,
    };
    // this.model.fotosFinal.unshift('./../../../../../../assets/img/' + imageList[Math.round(this.getRandomArbitrary(0, 2))]);
    this.model.fotosFinal.unshift('data:image/jpeg;base64,' + await this.camera.getPicture(options));
    console.log('Fotos: ', this.model.fotosFinal);
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  public enviarData(form: NgForm) {
    console.log('formulario: ', form);
    console.log('MODEL', this.model);
  }

  closeModal() {
    console.log('model: ', this.model);
    const result = this.returnHome();
    const save = this.saveInspectionService.createModel('data_final', this.model);
    if (save) {
      this.modalCtrl.dismiss();
    }
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  returnHome() {
    this.router.navigateByUrl('/main-menu');
  }

}
