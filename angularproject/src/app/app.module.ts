import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneratingApplicationComponent } from './generating-application/generating-application.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneratingApplicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
