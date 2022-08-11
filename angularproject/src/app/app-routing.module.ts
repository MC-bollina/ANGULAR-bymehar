import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { UnderstandingbasicsComponent } from './understandingbasics/understandingbasics.component';


const routes: Routes = [
  { path: 'understandingbasics', component: UnderstandingbasicsComponent },
]



@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    UnderstandingbasicsComponent
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UnderstandingbasicsComponent]
