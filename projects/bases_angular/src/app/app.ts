/* Código TypeScript del componente App (la clase/componente y su metadata). Aquí va la lógica del componente raíz y las referencias a su template/estilos. */
import { Component } from '@angular/core';
/* Component: decorador imprescindible para declarar una clase como componente Angular */
import { RouterOutlet } from '@angular/router';
/* RouterOutlet: Permite usar <router-outlet> en el HTML para cargar componentes según la ruta. Sin este import, Angular no reconoce esa etiqueta. */
import { CommonModule } from '@angular/common';
/* CommonModule: Aporta directivas estructurales y comunes como: *ngIf, *ngFor, ngClass o ngStyle. */
import { Heroe } from './heroe/heroe';
import { Listado } from './heroes/listado/listado';
import { Mensaje } from './mensaje/mensaje';
/* Heroe, Listado, Mensaje: Son componentes propios que hemos creado e importarlos permite usarlos como etiquetas HTML dentro del template de este componente. */

/* Todos los import ... from ... anteriores  hacen que el código correspondiente esté disponible en este archivo. Sin ellos, Angular ni siquiera sabe que existen esas clases. */

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Heroe, Listado, Mensaje],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
/* @Component: Es un decorador de TypeScript que convierte una clase normal en un componente Angular. Sin @Component, la clase App sería solo TypeScriptNormal y no un componente Angular.
   Define cómo se llama (selector), qué html usa (templateUrl), qué CSS usa (styleUrl) y qué dependencias tiene (imports). */

export class App {
  /* Se define la clase lógica del componente (propiedades y métodos). Con export se permite que Angular pueda usar esta clase */
  public titulo = 'Contador App';
  nombre = 'Jorge';
  edad = 18;
  email = 'infjgonzalez@ee.com';
  sueldos = [4000, 12000, 125];
  sitio = 'https://www.google.com';
  activo = true;

  numero: number = 10;
  base: number = 5;

  esActivo() {
    if (this.activo) { return 'Trabajador activo' } else { return 'Trabajador Inactivo' }
  }

  sumaSueldos1() {
    let suma = 0; // let local a la funcion sumaSueldos
    // calcular  mediante un for  la suma de los sueldos
    for (let x = 0; x < this.sueldos.length; x++) {
      suma += this.sueldos[x];
    }
    return suma;
  }

  sumaSueldos2(){
    //utilizar foreach y una expresion lambda
    let suma = 0; 
    this.sueldos.forEach(item => {suma +=item;});
    return suma;
  }

  sumaSueldos3() {
    let suma = 0; // let, suma es local en la función
    for (let x = 0; x < this.sueldos.length; x++) {
      suma += this.sueldos[x];
    }
    return suma;
  }

  sumaSueldos4() {
    let suma = 0; // let, suma es local en la función
    this.sueldos.forEach(item => {
      suma += item;
    });
    return suma;
  }

  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  }

  acumular(valor:number){
    this.numero +=valor;
  }

}
