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
        redirectTo: '/inspection-list/tab/ascensor/inicio',
        pathMatch: 'full'
      }
    ],
  },
  { 
    path: 'tabs/equipo/puerta',
    component: InspectionListPage,
    children:[
      {
        path: '',
        redirectTo: '/inspection-list/tab/puerta/inicio',
        pathMatch: 'full'
      }
    ],
  },
  { 
    path: 'tabs/equipo/escalera',
    component: InspectionListPage,
    children:[
      {
        path: '',
        redirectTo: '/inspection-list/tab/escalera/inicio',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: 'tab/ascensor',
    component: InspectionListPage,
    children:[
      { path: 'inicio', loadChildren: './tabs/ascensor/inicio/inicio.module#InicioPageModule' },
      { path: 'cabina', loadChildren: './tabs/ascensor/cabina/cabina.module#CabinaPageModule' },
      { path: 'maquina', loadChildren: './tabs/ascensor/maquina/maquina.module#MaquinaPageModule' },
      { path: 'pozo', loadChildren: './tabs/ascensor/pozo/pozo.module#PozoPageModule' },
      { path: 'foso', loadChildren: './tabs/ascensor/foso/foso.module#FosoPageModule' }
    ],
  },
  {
    path: 'tab/puerta',
    component: InspectionListPage,
    children:[
      { path: 'cabina', loadChildren: './tabs/ascensor/inicio/inicio.module#InicioPageModule' },
      { path: 'inicio', loadChildren: './tabs/ascensor/cabina/cabina.module#CabinaPageModule' },
      { path: 'maquina', loadChildren: './tabs/ascensor/maquina/maquina.module#MaquinaPageModule' },
      { path: 'pozo', loadChildren: './tabs/ascensor/pozo/pozo.module#PozoPageModule' },
      { path: 'foso', loadChildren: './tabs/ascensor/foso/foso.module#FosoPageModule' }
    ],
  },
  {
    path: 'tab/escalera',
    component: InspectionListPage,
    children:[
      { path: 'inicio', loadChildren: './tabs/ascensor/inicio/inicio.module#InicioPageModule' },
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