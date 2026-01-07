import { Component, OnInit } from '@angular/core';
/* OnInit es una interfaz de Angular que permite declarar que que un componente implementa el lifecycle hook ngOnInit(). 
  Sirve sobre todo para el contrato de tipado y que TypeScript te avise si escribes mal la firma, 
  mientras que Angular llamará a ngOnInit() exista o no la interfaz, siempre que el método esté definido */
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  imports: [CommonModule],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado implements OnInit {
  
  heroes: string []=['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string= '';
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  /* Angular ejecuta ngOnInit automáticamente, una sola vez, justo después de crear el componente y después de inicializar sus propiedades. 
  Es decir, angular crea la instancia del componente, asigna los @Input y llama a ngOnInit. Luego más tarde renderizará la plantilla. */

  borrarHeroe(){
    //this.heroes.pop(); // borra el último elemento
    //this.heroes=[];      //borra todo
    this.heroeBorrado =  this.heroes.shift() || '';  // borra el primer elemento y retorna su valor
    /* shift() es un método de Array (la clase/prototipo Array de JavaScript). Elimina el primer elemento del array, lo devuelve, 
    y además desplaza todos los demás elementos una posición hacia la izquierda (cambia la longitud del array). 
    || es el operador lógico OR devolverá el segundo operando si el primero es undefined, null, '', 0, false o NaN, 
    pero en otro caso devolverá el primer operando. */
    //Ctrl + barra espaciadora para ver la ayuda
    //|| ''  si es undefined devuelve un string vacio ''
    console.log(this.heroeBorrado);
  }
}
