import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UrlBuilderComponent } from './url-builder/url-builder.component';
import { HomeComponent } from './home.component';
import { environment } from '@env/environment';
import { ProcesspuzzleUtilLibModule } from 'processpuzzle-util';
import { RemoteApiConfiguration } from 'processpuzzle-util';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'url-builder', component: UrlBuilderComponent },
  { path: '**', component: PageNotFoundComponent }
];

const apiConfiguration: RemoteApiConfiguration = {
  protocol: environment['contactService'].protocol,
  host: environment['contactService'].host,
  contextPath: environment['contactService'].contextPath,
  resourcePath: environment['contactService'].resourcePath,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UrlBuilderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProcesspuzzleUtilLibModule.forRoot( apiConfiguration ),
    RouterModule.forRoot( appRoutes, { enableTracing: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
