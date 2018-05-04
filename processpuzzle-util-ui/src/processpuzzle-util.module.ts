import { NgModule } from '@angular/core';

import { HttpLoggingInterceptor } from './services/http-logging/http-logging';
import { TickTockComponent } from './components/tick-tock/tick-tock.component';
import { TickTockService } from './services/tick-tock/tick-tock.service';

@NgModule({
  providers: [
    HttpLoggingInterceptor,
    TickTockService,
  ],
  declarations: [
    TickTockComponent,
  ],
  exports: [
    TickTockComponent,
  ]
})

export class ProcessPuzzleUtilModule {
}
