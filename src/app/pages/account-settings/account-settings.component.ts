import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// Servicio
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // Referemcia a todo el DOM
  constructor(@Inject(DOCUMENT) private _document,
              public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName('selector');

    // convertirlo a un array
    let objetos = Array.from(selectores);

    // objetos.forEach((ref: any) => ref.classList.remove('working'));

    objetos.forEach((ref: HTMLHtmlElement) => ref.classList.remove('working'));

    // for de HTMLCollection
    // for (let ref of selectores) {
    //   ref.classList.remove('working');
    // }

    link.classList.add('working');
  }

  colocarCheck() {
    let selectores: any = document.getElementsByClassName('selector');

    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores) {

      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }


}
