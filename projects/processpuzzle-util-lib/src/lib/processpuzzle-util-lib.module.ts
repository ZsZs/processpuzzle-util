import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { httpInterceptorProviders } from './http-interceptor-providers';
import { RemoteApiConfiguration, RemoteApiConfigurationService } from './classes/url-builder/remote-api-configuration';
import { UrlBuilder } from './classes/url-builder/url-builder';

@NgModule({
  imports: [LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})],
  providers: [ httpInterceptorProviders ],
  declarations: [],
  exports: []
})

export class ProcesspuzzleUtilLibModule {
  static forRoot( config: RemoteApiConfiguration ): ModuleWithProviders {
    return {
      ngModule: ProcesspuzzleUtilLibModule,
      providers: [ UrlBuilder, { provide: RemoteApiConfigurationService, useValue: config }]
    };
  }
}
