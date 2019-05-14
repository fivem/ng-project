import {Compiler, Component, Input, NgModuleFactory, OnInit,NgModule} from '@angular/core';
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

  constructor(private compiler:Compiler) { }

  ngOnInit() {
    this.dynamicComponent = this.createNewComponent(this.content);
    this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));
  }

  protected createComponentModule(componentType:any){
    @NgModule({
      imports:[FormsModule],
      declarations:[
        componentType
      ],
      entryComponents: [componentType]
    })
  class RuntimeComponentModule{}
  return RuntimeComponentModule;
  }

  protected createNewComponent (text:string) {
    let template = `dynamically created template with text: ${text}`;

    @Component({
      selector: 'dynamic-component',
      template: template
    })
    class DynamicComponent implements OnInit{
      text: any;
      data: any;
      ngOnInit() {
        this.text = text;
        this.data = {"data":{
            "fgsfksq20171010": {
              "rqxzq": "",
              "fklxbd": "",
              "skdw": "",
              "sqbm": "",
              "gybzbd": "",
              "bz": "",
              "fkfsbd": "",
              "fgfz": "",
              "gcglbxmfzrxzbd": "",
              "bmzg": "",
              "fph": "",
              "dh": "",
              "gjxmfzrxzbd": "",
              "zp": "",
              "ssgsbd": "",
              "gcglbxmfzrxz": "",
              "jtzjl": "",
              "sqrID": "",
              "htbh": "",
              "lsh": "",
              "jtcwfz": "",
              "gscw": "",
              "fkdwbd": "",
              "gsfzr": "",
              "sqr": "申请人",
              "zgfz": "",
              "sqbmID": "",
              "initData": {

              },
              "fklx": "",
              "ssgs": "",
              "fknr": "",
              "cdhp": "",
              "gybz": "",
              "yxzh": "",
              "jexx": "",
              "khx": "",
              "fkdw": "",
              "fkfs": "",
              "gjxmfzrxz": "",
              "bzbd": "",
              "xxje": "",
              "jedx": ""
            }
          }};
        //this.data = JSON.stringify(this.data);

      }
    }
    return DynamicComponent;
  }
}
