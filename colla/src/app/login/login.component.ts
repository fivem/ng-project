import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  UserName: string;
  Password: string;
  ValidCode: string;
  validCode: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    console.log(1);
    this.refreshCode();
  }

  refreshCode() {
    this.validCode = "";
    const dictCode = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const contextElement = document.getElementById('ValidCodeCanvas') as HTMLCanvasElement;
    const context = contextElement.getContext('2d');
    context.clearRect(0, 0, contextElement.width, contextElement.height);
// 设置字体
    context.font = '24px bold 黑体';
// 设置颜色
    context.fillStyle = '#1A16FF';
// 设置水平对齐方式
    context.textAlign = 'center';
// 设置垂直对齐方式
    context.textBaseline = 'middle';
// 绘制文字（参数：要写的字，x坐标，y坐标）
    let targetText = "";
    for(let i=0;i<4;i++){
      targetText += "  ";
      let ran = parseInt(Math.random()*36+"",10);
      console.log(ran);
      targetText += dictCode[ran];
      this.validCode += dictCode[ran];
    }
    context.fillText(targetText, 50, 10);
  }

  login(){
    if(this.UserName!==undefined && this.Password!==undefined && this.ValidCode.toUpperCase() ===this.validCode){
      this.router.navigate(['/main']);
    }
  }
}
