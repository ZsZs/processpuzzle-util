import { NgModule } from '@angular/core';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { TickTockComponent } from './components/tick-tock/tick-tock.component';
import { httpInterceptorProviders } from './http-interceptor-providers';
import { TickTockService } from './services/tick-tock/tick-tock.service';

@NgModule({
  imports: [LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})],
  providers: [ httpInterceptorProviders, TickTockService ],
  declarations: [TickTockComponent],
  exports: [TickTockComponent]
})

export class ProcesspuzzleUtilUiLibModule { }
