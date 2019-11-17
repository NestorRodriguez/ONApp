import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionListPage } from './inspection-list.page';

const routes: Routes = [
  { 
    path: 'tabs/ascensor',
    component: InspectionListPage,
    children:[
      {
        path: '',
        redirectTo: '/inspection-list/tab/cabina',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: 'tab',
    component: InspectionListPage,
    children:[
      { path: 'cabina', loadChildren: '../inspection-list/tabs/cabina/cabina.module#CabinaPageModule' },
      { path: 'foso', loadChildren: '../inspection-list/tabs/cabina/cabina.module#CabinaPageModule' },
      { path: 'pozo', loadChildren: '../inspection-list/tabs/cabina/cabina.module#CabinaPageModule' }
    ],
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TabsPageRoutingModule {}