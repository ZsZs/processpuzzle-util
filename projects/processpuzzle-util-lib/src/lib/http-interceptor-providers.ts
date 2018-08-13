import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpLoggingInterceptor} from './services/http-logging/http-logging';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpLoggingInterceptor, multi: true }
];
