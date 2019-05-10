import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewTaskComponent} from "./new-task/new-task.component";

const routes: Routes = [
  {
    path: 'newTask',
    component: NewTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
