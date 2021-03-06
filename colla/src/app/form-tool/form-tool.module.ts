import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormToolComponent} from './form-tool.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'formTool',
    component: FormToolComponent
  }
];

@NgModule({
  declarations: [FormToolComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormToolModule { }
