import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BpmnModelerComponent} from './bpmn-modeler.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'bpmn-modeler',
    component: BpmnModelerComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BpmnModelerModule { }
