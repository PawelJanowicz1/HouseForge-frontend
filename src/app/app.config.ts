import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const API_CONFIG = {
  backendUrl: 'http://budowa-domow-trojmiasto.pl:8086',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: 'API_CONFIG', useValue: API_CONFIG }
  ]
};
