import { NgModule } from '@angular/core';
import { TickTockComponent } from './components/tick-tock/tick-tock.component';
import { HttpLoggingInterceptor } from './services/http-logging/http-logging';
import { TickTockService } from './services/tick-tock/tick-tock.service';

@NgModule({
  imports: [],
  providers: [ HttpLoggingInterceptor, TickTockService ],
  declarations: [TickTockComponent],
  exports: [TickTockComponent]
})

export class ProcesspuzzleUtilUiLibModule { }
