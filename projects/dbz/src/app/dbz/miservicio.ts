import { Injectable } from '@angular/core';
/* Injectable: Es para poder usar el decorador @Injectable(...). Ese decorador marca la clase como “inyectable” 
(usable por el sistema de Dependency Injection de Angular). */
import { Personaje } from './interfaces/dbz.interface';

@Injectable({
  providedIn: 'root',
})
/* @Injectable es un decorador que le dice a Angular que esta clase es un servicio que puede:
- ser creado y gestionado por Angular (en vez de instanciarlo tú con new),
- y ser inyectado en componentes/otros servicios vía constructor o vía una propiedad.

providedIn: 'root' significa que Angular registrará este servicio en el inyector raíz:
- habrá una única instancia para toda la aplicación (singleton),
- estará disponible en cualquier parte sin tener que añadirlo manualmente a providers.

Hay que recordar que en Angular (y en TypeScript), un decorador es una función especial que se coloca encima de una clase, 
método, propiedad o parámetro para añadir metadatos o modificar su comportamiento sin cambiar el código interno. */
export class Miservicio {
  constructor() {
    console.log('Servicio inicializado')
  }

  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 7500 },
  ]
  
  get personajes():Personaje[] {
    return [...this._personajes];
  }
  
  /* get es un getter de TypeScript: nos permite acceder como si fuese una propiedad: 
  [...this._personajes] es el spread operator aplicado a un array: crea una copia superficial del array.
  - Devuelve un array nuevo con los mismos elementos.
  - Evita que alguien pueda hacer: this.miServicio.personajes.push(...)
  */

  agregarNuevoPersonaje (argumento: Personaje) {
    this._personajes.push(argumento);
    /* push es un método de Array (JavaScript) que:
    - Añade un elemento al final del array.
    - Modifica el array original.
    - Devuelve la nueva longitud del array. */
  }
}
