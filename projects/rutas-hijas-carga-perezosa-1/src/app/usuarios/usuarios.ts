import { Component } from '@angular/core';

console.log('USUARIOS FILE LOADED');

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  constructor() {
    console.log('constructor Usuarios');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Usuarios');
  }
}
