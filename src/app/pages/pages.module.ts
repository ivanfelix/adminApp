import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';

import { PagesRoutingModule } from './pages-routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    GraficasComponent
  ],
  declarations: [
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    GraficasComponent
  ]
})
export class PagesModule { }
