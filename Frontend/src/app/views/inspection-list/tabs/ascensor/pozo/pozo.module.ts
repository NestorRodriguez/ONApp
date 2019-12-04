import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PozoPage } from './pozo.page';
import {Camera} from '@ionic-native/camera/ngx';

import { ModalObsFinalPage } from '../../modal-obs-final/modal-obs-final.page';
import { ModalObsFinalPageModule } from '../../modal-obs-final/modal-obs-final.module';

const routes: Routes = [
  {
    path: '',
    component: PozoPage
  }
];

@NgModule({
  entryComponents: [
    ModalObsFinalPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalObsFinalPageModule
  ],
  providers: [
    Camera,
  ],
  declarations: [PozoPage]
})
export class PozoPageModule {}
