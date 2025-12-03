import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),

    // Configuración moderna de ngx-translate
    provideTranslateService({
      lang: 'en',          // idioma inicial
      fallbackLang: 'es',  // idioma de reserva
      loader: provideTranslateHttpLoader({
        prefix: './i18n/', // carpeta donde tienes en.json, es.json, eu.json
        suffix: '.json'
      })
    })
  ]
};
