import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BpmnModelerComponent} from './bpmn-modeler/bpmn-modeler.component';

const routes: Routes = [
  {
    path: 'bpmn',
    component: BpmnModelerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
