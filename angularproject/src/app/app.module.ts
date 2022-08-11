import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { UnderstandingbasicsComponent } from './understandingbasics/understandingbasics.component';



@NgModule({
  declarations: [
    AppComponent,
    UnderstandingbasicsComponent
  ],
 

  imports: [
    BrowserModule,
    AppRoutingModule,
    routingComponents
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
