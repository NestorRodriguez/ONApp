import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionListPage } from './inspection-list.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: InspectionListPage,
    children:
      [
        {
          path: 'cabina',
          children:
            [
              {
                path: '',
                loadChildren: '../inspection-list/tabs/cabina/cabina.module#CabinaPageModule'
              }
            ]
        },
        {
          path: 'tab2',
          children:
            [
              {
                path: '',
                loadChildren: '../tab2/tab2.module#Tab2PageModule'
              }
            ]
        },
        {
          path: 'tab3',
          children:
            [
              {
                path: '',
                loadChildren: '../tab3/tab3.module#Tab3PageModule'
              }
            ]
        },
        {
          path: '',
          // redirectTo: '/tabs/tab1',
          redirectTo: '../inspection-list/tabs/cabina/cabina.module#CabinaPageModule',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    // redirectTo: '/tabs/tab1',
    redirectTo: '../inspection-list/tabs/cabina/cabina.module#CabinaPageModule',
    pathMatch: 'full'
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