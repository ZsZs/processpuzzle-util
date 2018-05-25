import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ProcessPuzzleUtilkModule } from 'ticktock';

@NgModule({
  imports: [ BrowserModule, ProcessPuzzleUtilkModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
