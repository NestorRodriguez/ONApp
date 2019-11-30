import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FosoPage } from './foso.page';
import {Camera} from '@ionic-native/camera/ngx';

const routes: Routes = [
  {
    path: '',
    component: FosoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    Camera,
  ],
  declarations: [FosoPage]
})
export class FosoPageModule {}
