import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { ComponentComponent } from './component/component.component';


@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule
  ],
  exports: [
    ComponentComponent  ]
})
export class BasicsModule { }
