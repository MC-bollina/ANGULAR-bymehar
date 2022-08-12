import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicsModule } from './basics/basics.module';


import { NextComponent } from './next/next.component';



@NgModule({
  declarations: [
    AppComponent,
    NextComponent,
   
 ],

  imports: [
    BrowserModule,
    BasicsModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
