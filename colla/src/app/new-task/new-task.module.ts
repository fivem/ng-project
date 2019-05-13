import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'newTask',
    component: NewTaskComponent
  }
];

@NgModule({
  declarations: [NewTaskComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class NewTaskModule { }
