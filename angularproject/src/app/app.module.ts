import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneratingApplicationComponent } from './generating-application/generating-application.component';
import { ComponentComponent } from './component/component.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule ,Routes } from '@angular/router';


const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    GeneratingApplicationComponent,
    ComponentComponent
  ],
 

  imports: [
    BrowserModule,
    [RouterModule.forRoot( routes )],
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
