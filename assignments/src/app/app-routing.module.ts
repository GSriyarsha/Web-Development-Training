import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';


const routes: Routes = [
  {path:'', component:Assignment1Component},
  {path:'assignment2', component: Assignment2Component},
  {path:'assignment3', component: Assignment3Component},
  {path:'assignment4', component: Assignment4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

