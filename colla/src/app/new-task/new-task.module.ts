import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task.component';
import { Routes, RouterModule } from '@angular/router';
import { NetworkService } from "../common/network/network.service";
import { CompileComponent } from '../compile/compile.component';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: 'newTask',
    component: NewTaskComponent
  }
];

@NgModule({
  declarations: [NewTaskComponent,CompileComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers:[
    NetworkService
  ]
})
export class NewTaskModule { }
