import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    NoPageFoundComponent,
    BreadcrumbsComponent,
  ],
  declarations: [
    HeaderComponent,
    NoPageFoundComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ]
})
export class SharedModule { }
