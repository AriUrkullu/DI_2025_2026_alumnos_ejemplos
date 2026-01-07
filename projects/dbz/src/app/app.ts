import { Component, signal } from '@angular/core';
/* signal: Para poder usar la función signal */
import { RouterOutlet } from '@angular/router';
/* RouterOutlet es la “pieza” del Router que permite usar en el HTML la etiqueta: <router-outlet></router-outlet>. 
Esa etiqueta es donde Angular Router inserta el componente correspondiente a la ruta actual. */
import { MainPage } from './dbz/main-page/main-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
/* En componentes standalone, no basta con importarlo en TypeScript: hay que declararlo en imports: [...] para que Angular permita usarlo en el template de este componente. 
import { RouterOutlet } ... -> lo tenemos disponible en el archivo. Es decir, el import hace que algo esté disponible en TypeScript (en este archivo).
imports: [RouterOutlet, ...] -> Angular lo habilita para el HTML de App. Es decir, el imports hace que ese algo esté disponible en el template HTML de ese componente (Angular).*/
export class App {
  protected readonly title = signal('dbz');
  /* signal crea una variable reactiva (estado reactivo). En este caso:
  - title no es un string “normal”; es un signal que contiene un string.
  - Para leerlo en TS o en el template se usa como función: title().
  - Si lo cambiamos con title.set('otro'), Angular sabe que cambió y actualiza el HTML que dependa de title.
  Por ejemplo, en la parte de Typescript tener: title.set('DBZ App'); y en la parte de HTML tener: <h1>{{ title() }}</h1>
  La ventaja de hacer esto: Angular puede actualizar la UI de forma más directa y eficiente.
  */
}
