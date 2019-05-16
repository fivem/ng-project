import {Compiler, Component, Input, NgModuleFactory, OnInit,NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'form-content',
  template: `<ng-container *ngComponentOutlet="dynamicComponent;
                              ngModuleFactory:dynamicModule;"></ng-container>`,
  styleUrls: ['./compile.component.scss']
})
export class CompileComponent implements OnInit {
  dynamicComponent;
  dynamicModule: NgModuleFactory<any>;

  @Input("content")
  content:string;
  @Input("data")
  data:any;

  constructor(private compiler:Compiler) { }

  ngOnInit() {
    //this.data = JSON.stringify(this.data);
    this.dynamicComponent = this.createNewComponent(this.content,this.data);
    this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
  }

  protected createComponentModule(componentType:any){
    @NgModule({
      imports:[FormsModule,CommonModule],
      declarations:[
        componentType
      ],
      entryComponents: [componentType]
    })
  class RuntimeComponentModule{}
  return RuntimeComponentModule;
  }

  protected createNewComponent (text:string,data:any) {
    let template = `dynamically created template with text: ${text} `;

    @Component({
      selector: 'dynamic-component',
      template: template
    })
    class DynamicComponent implements OnInit{
      text: any;
      data: any;
      ngOnInit() {
        debugger
        this.data = data;
        console.log(this.data);
      }
      ngAfterContentInit(){
        debugger
        console.log(data);
      }
      ngAfterViewInit(){
        debugger
        console.log(data);
      }
    }
    return DynamicComponent;
  }
}
