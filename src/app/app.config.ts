import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MyPreset } from './core/theme/theme-preset';
import { SPANISH_LOCALE } from './core/locale/locale-spanish';
import { providePrimeNG } from 'primeng/config';
import { APP_CONFIG } from './core/config/environment.token';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    { provide: APP_CONFIG, useValue: environment }, 
    providePrimeNG({
      theme: {
          preset: MyPreset,
          options: {
              darkModeSelector: '.tickets-dark'
          }
      },
      translation: SPANISH_LOCALE
  })
  ]
};
