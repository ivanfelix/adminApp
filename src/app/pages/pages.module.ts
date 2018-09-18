import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import { PagesRoutingModule } from './pages-routing';
import { SharedModule } from '../shared/shared.module';

import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ChartsModule
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
    GraficasComponent,
    GraficoDonaComponent,
    AccountSettingsComponent
  ]
})
export class PagesModule { }
