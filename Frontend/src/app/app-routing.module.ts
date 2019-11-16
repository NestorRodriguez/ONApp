import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'main-menu', loadChildren: './views/main-menu/main-menu.module#MainMenuPageModule' },
  { path: 'equipment-menu', loadChildren: './views/equipment-menu/equipment-menu.module#EquipmentMenuPageModule' },
  { path: 'inspection-menu', loadChildren: './views/inspection-menu/inspection-menu.module#InspectionMenuPageModule' },
  { path: 'tab1', loadChildren: './views/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './views/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './views/tab3/tab3.module#Tab3PageModule' },
  { path: 'inspection-list', loadChildren: './views/inspection-list/inspection-list.module#InspectionListPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
