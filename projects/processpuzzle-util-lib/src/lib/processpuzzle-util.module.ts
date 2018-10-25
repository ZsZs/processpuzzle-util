import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { httpInterceptorProviders } from './http-interceptor-providers';
import { UrlBuilder } from './services/url-builder/url-builder';
import { EnvironmentConfigurationService } from './services/environment-configuration/environment-configuration.service';
import { EnvironmentConfigurationToken } from './services/environment-configuration/environment-configuration';

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
        { provide: EnvironmentConfigurationToken, useValue: env },
        EnvironmentConfigurationService,
        UrlBuilder
      ]
    };
  }
}
