import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionListPage } from './inspection-list.page';

const routes: Routes = [
  { 
    path: 'tabs/equipo/ascensor',
    component: InspectionListPage,
    children:[
      {
        path: '',
        redirectTo: '/inspection-list/tab/ascensor/cabina',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: 'tab/ascensor',
    component: InspectionListPage,
    children:[
      { path: 'cabina', loadChildren: './tabs/ascensor/cabina/cabina.module#CabinaPageModule' },
      { path: 'maquina', loadChildren: './tabs/ascensor/maquina/maquina.module#MaquinaPageModule' },
      { path: 'pozo', loadChildren: './tabs/ascensor/pozo/pozo.module#PozoPageModule' },
      { path: 'foso', loadChildren: './tabs/ascensor/foso/foso.module#FosoPageModule' }
    ],
  },
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