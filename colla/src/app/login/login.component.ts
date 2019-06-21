import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  UserName: string;
  Password: string;
  ValidCode: string;

  constructor() {
    console.log('1');
  }

  ngOnInit() {
    console.log(1);
  }

  refreshCode() {
    const dictCode = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const context = document.getElementById('canvas').getContext('2d');
// 设置字体
    context.font = '18px bold 黑体';
// 设置颜色
    context.fillStyle = '#ff0';
// 设置水平对齐方式
    context.textAlign = 'center';
// 设置垂直对齐方式
    context.textBaseline = 'middle';
// 绘制文字（参数：要写的字，x坐标，y坐标）
    for(let i=0;i<4;i++){
      Math.random()
    }
    context.fillText('要写的文字', 100, 100);
  }
}
