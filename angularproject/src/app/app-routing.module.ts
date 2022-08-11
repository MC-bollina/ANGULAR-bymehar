import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UnderstandingbasicsComponent } from './understandingbasics/understandingbasics.component';


const routes: Routes = [
  { path: 'understandingbasics', component: UnderstandingbasicsComponent },
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UnderstandingbasicsComponent,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UnderstandingbasicsComponent]
