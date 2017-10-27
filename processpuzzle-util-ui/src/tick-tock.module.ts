import { NgModule } from '@angular/core';
import { HttpLoggingInterceptor } from './services';
import { TickTockComponent } from './components';
import { TickTockService } from './services';

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
export class TickTockModule {
}
