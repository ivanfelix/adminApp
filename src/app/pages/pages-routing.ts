import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children: [
      {path:'dashboard', component:DashboardComponent},
      {path:'progress', component:ProgressComponent},
      {path:'graficas', component:GraficasComponent},
      {path:'account-settings', component:AccountSettingsComponent},
      {path:'', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {};
