import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';
import { Miservicio } from '../miservicio';

@Component({
  selector: 'app-agregar',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css',
})
export class Agregar {

  dbzService:Miservicio = inject(Miservicio);

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  /* @Input sirve para marcar esa propiedad como entrada pública del componente, es decir: permite que el componente padre le pase un valor desde el HTML. */

  agregar (){
    if (this.nuevo.nombre.trim().length === 0) { return; }
    /*  */

    console.log(this.nuevo);
    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 }
  }
}
