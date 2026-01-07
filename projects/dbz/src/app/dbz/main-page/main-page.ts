import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personajes } from '../personajes/personajes';
import { Personaje } from '../interfaces/dbz.interface';
import { Agregar } from '../agregar/agregar';
import { Miservicio } from '../miservicio';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule, CommonModule, Personajes, Agregar],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  dbzService:Miservicio = inject(Miservicio);
  /* Esa instrucción obtiene una instancia del servicio Miservicio desde el sistema de inyección de dependencias de Angular y la guarda en una propiedad del componente. */

  get personajes():Personaje[] {
    return this.dbzService.personajes;
  }
  /* Es un getter de TypeScript que declara una “propiedad calculada” llamada personajes en tu componente. Con ello, no la llamamos como función, sino como propiedad. */

  nuevo: Personaje={nombre:'Maestro Roshi', poder:1000}

  agregarNuevoPersonaje(argumento: Personaje){
    //console.log(argumento);
    this.personajes.push(argumento);
  }

}
