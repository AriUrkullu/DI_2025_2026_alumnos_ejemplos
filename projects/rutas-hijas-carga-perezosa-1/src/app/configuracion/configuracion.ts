import { Component } from '@angular/core';

console.log('CONFIGURACION FILE LOADED');

@Component({
  selector: 'app-configuracion',
  imports: [],
  templateUrl: './configuracion.html',
  styleUrl: './configuracion.css',
})
export class Configuracion {
  constructor() {
    console.log('constructor Configuracion');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Configuracion');
  }
}
