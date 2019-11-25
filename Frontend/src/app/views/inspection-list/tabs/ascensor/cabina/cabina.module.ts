import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CabinaPage } from './cabina.page';
import {Camera} from '@ionic-native/camera/ngx';

const routes: Routes = [
  {
    path: '',
    component: CabinaPage
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
  declarations: [CabinaPage]
})
export class CabinaPageModule {}
