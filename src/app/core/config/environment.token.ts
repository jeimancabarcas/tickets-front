import { InjectionToken } from '@angular/core';
import { Environment } from '../../../environments/environment.model';

export const APP_CONFIG = new InjectionToken<Environment>(
  'Application config'
);