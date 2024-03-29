import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'main-menu', loadChildren: './views/main-menu/main-menu.module#MainMenuPageModule' },
  { path: 'equipment-menu', loadChildren: './views/equipment-menu/equipment-menu.module#EquipmentMenuPageModule' },
  { path: 'inspection-list', loadChildren: './views/inspection-list/inspection-list.module#InspectionListPageModule' },
  { path: 'storage-inspections', loadChildren: './views/storage-inspections/storage-inspections.module#StorageInspectionsPageModule' },  { path: 'reports', loadChildren: './views/reports/reports.module#ReportsPageModule' }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
