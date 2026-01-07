/* Punto de entrada que arranca Angular en el navegador. Suele hacer el bootstrapApplication(App, appConfig) (o equivalente) y carga la configuración. */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
