import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RightBoxComponent} from "./right-box.component";

const routes:Routes  =[{
  path: 'rightBox',
  component: RightBoxComponent
}];

@NgModule({
  declarations: [
    RightBoxComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class RightBoxModule { }
