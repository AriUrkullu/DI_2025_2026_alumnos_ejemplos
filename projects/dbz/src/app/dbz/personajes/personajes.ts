import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Miservicio } from '../miservicio';

@Component({
  selector: 'app-personajes',
  imports: [CommonModule, FormsModule],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class Personajes {
  dbzService:Miservicio=inject(Miservicio);
  get personajes() {
    return this.dbzService.personajes;
  }
  /* Es un getter de TypeScript que declara una “propiedad calculada” llamada personajes en tu componente. Con ello, no la llamamos como función, sino como propiedad. */

}
