import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task.component';
import { Routes, RouterModule } from '@angular/router';
import { NetworkService } from "../common/network/network.service";
import {InputDirective} from "../directive/input.directive";
import { CompileComponent } from '../compile/compile.component';

const routes: Routes = [
  {
    path: 'newTask',
    component: NewTaskComponent
  }
];

@NgModule({
  declarations: [NewTaskComponent,InputDirective,CompileComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers:[
    NetworkService
  ]
})
export class NewTaskModule { }
