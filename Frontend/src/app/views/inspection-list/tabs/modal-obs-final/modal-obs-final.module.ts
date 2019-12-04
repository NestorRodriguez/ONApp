import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalObsFinalPage } from './modal-obs-final.page';

const routes: Routes = [
  {
    path: '',
    component: ModalObsFinalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalObsFinalPage]
})
export class ModalObsFinalPageModule {}
