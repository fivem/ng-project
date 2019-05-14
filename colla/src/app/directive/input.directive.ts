import { Directive,ElementRef,HostListener } from '@angular/core';
import {Input} from "@angular/core";


@Directive({
  selector: '[ghaoInput]'
})
export class InputDirective {
  @Input('ghaoInput')  ghaoInput : string;
  @HostListener("ngModelChange") ngModelChange(){
    //valid
    debugger
    console.log(this.el.nativeElement);
  }
  constructor(private el:ElementRef) {
    console.log(this.el.nativeElement);

  }

}
