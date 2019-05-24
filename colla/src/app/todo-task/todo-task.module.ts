import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router";
import {TodoTaskComponent} from "./todo-task.component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

const routes:Routes = [
  {
    path:"todoTask",
    component: TodoTaskComponent,
  }
];

@NgModule({
  declarations: [
    TodoTaskComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxDatatableModule,AngularMultiSelectModule
  ]
})
export class TodoTaskModule { }
