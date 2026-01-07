/* Define la configuración de la aplicación (proveedores) para el arranque “standalone” (por ejemplo provideRouter(...), provideHttpClient(), etc.). 
   Es donde se registran servicios globales y capacidades a nivel de app. */
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
/* ApplicationConfig: Es el tipo del objeto appConfig. Básicamente define que esa configuración de arranque puede tener, entre otras cosas, un array providers con proveedores globales para toda la app. 
provideBrowserGlobarErrorListeners: Añade “listeners” globales del navegador para capturar errores no manejados (por ejemplo eventos window.error y window.unhandledrejection) y 
reenviarlos al sistema de errores de Angular (ErrorHandler). Sirve para que Angular se entere de fallos que ocurren fuera nuestro código normal.
provideZoneChangeDetection: Configura la detección de cambios basada en Zone.js (NgZone) cuando arrancas con bootstrapApplication (standalone)*/
import { provideRouter } from '@angular/router';
/* Registra todos los providers necesarios del Router y le pasa nuestra tabla de rutas para que la navegación funcione (en standalone es el equivalente moderno a RouterModule.forRoot(...)). */
import { routes } from './app.routes';
/* Es nuestra lista de rutas (el array Routes) que se define en app.routes.ts. Se la pasamos a provideRouter(routes) para que el router sepa qué componente cargar en cada URL. */

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
/* Se crea el objeto de configuración appConfig de tipo ApplicationConfig, que se exporta para que lo pueda usar el arranque de la app. providers: [...] declara los providers globales, 
cosas que Angular registra en el inyector raíz (Dependency Injection) y que afectan a toda la app. Es como enchufar capacidades a nivel de aplicación.
Con provideBrowserGlobalErrorListeners se activan listeners globales del navegador para que Angular pueda caputar errores no controlados y tratarlos con sus sistema de manejo de errores.
Con provideZoneChangeDetection({ eventCoalescing: true}) se configura cómo Angular hace deteccion de cambios usando Zone.js. Con eventCoalescing: true, Angular intenta agrupar (coalescer) varios 
eventos en menos ciclos de cambios, lo que normalmente mejora el rendimiento.
Con provideRouter(routes) se registra el Router de Angular y se le pasa nuestra tabla de rutas routes. Sin esto, no se podría usar navegación por URL, <router-outlet>, routerLink, ...  */
