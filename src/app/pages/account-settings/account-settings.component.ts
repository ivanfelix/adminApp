import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public settingsS : SettingsService) { }

  ngOnInit() {
  }
  
  cambiar_color(tema:string, link:string){
    this.aplicarCheck(link);
    this.settingsS.apilcarTema(tema);
  }
  aplicarCheck(link:any){
    let selectores:any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

}
