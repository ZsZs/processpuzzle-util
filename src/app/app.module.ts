// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Third party components

// ProcessPuzzle components
import { AppComponent } from './app.component';
import { UrlBuilderComponent } from './url-builder/url-builder.component';
import { HomeComponent } from './home.component';
import { environment } from '@env/environment';
import { ProcesspuzzleUtilModule } from 'processpuzzle-util';
import { RemoteApiConfiguration } from 'processpuzzle-util';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'url-builder', component: UrlBuilderComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UrlBuilderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ProcesspuzzleUtilModule.forRoot( environment ),
    RouterModule.forRoot( appRoutes, { enableTracing: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
