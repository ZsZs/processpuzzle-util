import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProcessPuzzleUtilUiModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, ProcessPuzzleUtilUiModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
