import { Component, OnInit } from '@angular/core';
import {NetworkService} from "../common/network/network.service";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  tgt:string;
  origin:string;
  content:string;
  data:object;
  permission:object;

  getData(url:String){
    /*this.network.get(url,this.tgt)
      .subscribe((data)=>{
        this.origin = data['data']['list'][0]['form']['formHtml'];
        this.data = data['data']['list'][0]['data'];
        this.permission = data['data']['list'][0]['permission']['field'];

        this.content = this.domSanitizer.bypassSecurityTrustHtml(this.origin);
        console.log(data);
    });*/
    let ret = this.network.get(url,this.tgt);
    this.origin = ret['data']['list'][0]['form']['formHtml'];
    this.data = ret['data']['list'][0]['data'];
    this.permission = ret['data']['list'][0]['permission']['field'];

    //this.content = this.domSanitizer.bypassSecurityTrustHtml(this.origin);

    console.log(ret);
  }
  postData(url:String){
    this.network.post(url,"username=zhaopeipei&password=E10ADC3949BA59ABBE56E057F20F883E"
    ).subscribe((data)=>{
      this.tgt = data;
      console.log(data);
    })
  }
  constructor(private network : NetworkService,private domSanitizer:DomSanitizer) {

    this.content = `{{data.fgsfksq20171010}}-<input ghaoInput name="data.fgsfksq20171010.sqr"   init-model="data.fgsfksq20171010.initData.sqr" validate="{'required':true}" />`;
  }

  ngOnInit() {

  }

}
