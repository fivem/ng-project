import { Component, OnInit } from '@angular/core';
import {NetworkService} from "../common/network/network.service";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  tgt:string;
  origin:object;
  content:SafeHtml;

  getData(url:String){
    this.network.get(url,this.tgt)
      .subscribe((data)=>{
        let list = data['data']['list'];
        let form = list[0]['form'];
        origin = form['formHtml'];
        this.content = this.domSanitizer.bypassSecurityTrustHtml(origin);
        console.log(origin);
    });
  }
  postData(url:String){
    this.network.post(url,"username=zhaopeipei&password=E10ADC3949BA59ABBE56E057F20F883E"
    ).subscribe((data)=>{
      this.tgt = data;
      console.log(data);
    })
  }
  constructor(private network : NetworkService,private domSanitizer:DomSanitizer) {

  }

  ngOnInit() {
  }

}
