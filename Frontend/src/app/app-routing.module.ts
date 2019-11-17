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
  { path: 'inspection-list', loadChildren: './views/inspection-list/inspection-list.module#InspectionListPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
