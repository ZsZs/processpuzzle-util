import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { httpInterceptorProviders } from './http-interceptor-providers';
import { UrlBuilder } from './services/url-builder/url-builder';
import { EnvironmentConfigurationToken } from './services/environment-configuration/environment-configuration';
import {EnvironmentConfigurationService} from './services/environment-configuration/environment-configuration.service';

@NgModule({
  imports: [LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})],
  providers: [ httpInterceptorProviders ],
  declarations: [],
  exports: []
})

export class ProcesspuzzleUtilModule {
  static forRoot( env: Object ): ModuleWithProviders {
    return {
      ngModule: ProcesspuzzleUtilModule,
      providers: [
        EnvironmentConfigurationService,
        { provide: EnvironmentConfigurationToken, useValue: env },
        UrlBuilder
      ]
    };
  }
}
