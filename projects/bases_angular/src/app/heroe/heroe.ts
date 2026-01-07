import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  imports: [],
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
})
export class Heroe {
    nombre: string = 'Ironman';
    edad  : number = 45

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return this.nombre + ' - ' + this.edad;
    }

    cambiarNombre(): void {
        this.nombre ='Spiderman';
    }
    
    cambiarEdad(): void {
        console.log('Key!!!');
        /* Imprime el texto Key!!! en la consola del navegador (DevTools), que se usa principalmente para depurar */
        this.edad = 30;
    }

}
