import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-guage',
      submenu: [
        {titulo:'Dashboard', url:'/dashboard'},
        {titulo:'Progress Bar', url:'/progress'},
        {titulo:'Gráficas', url:'/graficas'}
      ]
    }
  ];

  constructor() { }



}

