import { Component, OnInit } from '@angular/core';
import {NetworkService} from '../common/network/network.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  tgt: string;
  origin: string;
  content: string;
  data: object;
  permission: object;

  getData(url: string) {
    /*this.network.get(url,this.tgt)
      .subscribe((data)=>{
        this.origin = data['data']['list'][0]['form']['formHtml'];
        this.data = data['data']['list'][0]['data'];
        this.permission = data['data']['list'][0]['permission']['field'];

        this.content = this.domSanitizer.bypassSecurityTrustHtml(this.origin);
        console.log(data);
    });*/
    const ret = this.network.get(url, this.tgt);
    /*this.origin = ret.data.list[0].form.formHtml;
    this.data = ret.data.list[0].data;
    this.permission = ret.data.list[0].permission.field;*/

    // this.content = this.domSanitizer.bypassSecurityTrustHtml(this.origin);

    console.log(ret);
  }
  postData(url: string) {
    this.network.post(url, 'username=zhaopeipei&password=E10ADC3949BA59ABBE56E057F20F883E'
    ).subscribe((data) => {
      this.tgt = data;
      console.log(data);
    });
  }
  constructor(private network: NetworkService, private domSanitizer: DomSanitizer) {
    this.data = JSON.parse(`
      {
				"jtfk20171011": {
					"sqbm": "人力资源部（招聘）",
					"bz": "ba2f761aaee64d3e9a6504dd2927091c",
					"htbh": "LS-B-0501-22",
					"initData": {

					},
					"ssgs": "39fc2b2999b847dfa926fc07dc74cb22",
					"jt10jfzcqmjbd": "人资",
					"ref_id_": "0",
					"fknr": "支付海心公司协力人员工资",
					"jexx": 120580,
					"yxzh": "6258451212545124",
					"fkfs": "3fefafedd1c64b508e9512c9bad6a1a2",
					"bzbd": "美元",
					"jedx": "人资",
					"rqxzq": "2019-05-23",
					"jt10jfzcqmj": "5776783948342577062",
					"fkfsbd": "支票",
					"fkdwbd": "辽宁忠旺集团有限公司",
					"sqr": "张瑞",
					"fklx": "5fff338103f14048adb85ef5447c0f06",
					"khx": "中国邮政储蓄银行",
					"fkdw": "f826d64253eb41f1940432c3ec1ef91d",
					"id_": "10000044680090"
				}
			}
    `);
    this.permission = {
      fields: {
        jtfk20171011: {
          rqxzq: 'w',
          skdw: 'w',
          sqbm: 'w',
          jt10jfzcqmj: 'w',
          gynqxz: 'n',
          bz: 'w',
          fgfz: 'r',
          bmzg: 'r',
          jtfz: 'r',
          gybbzxz: 'n',
          fph: 'w',
          dh: 'w',
          zp: 'w',
          jtzjl: 'r',
          sqrID: 'w',
          htbh: 'w',
          xyjckbmxz: 'n',
          jtzjl29: 'w',
          lsh: 'w',
          jtzjl28: 'w',
          jtcwfz: 'r',
          gscw: 'r',
          sqr: 'w',
          sqbmID: 'w',
          fklx: 'w',
          ssgs: 'w',
          tzcfbzxz: 'n',
          jtcwjl: 'r',
          cdhp: 'w',
          fknr: 'w',
          jexx: 'w',
          yxzh: 'w',
          cwbzxz: 'n',
          khx: 'w',
          fkdw: 'w',
          fkfs: 'w',
          fgszjlmj: 'n',
          fgszjl: 'r',
          zjjlxz: 'n',
          jedx: 'w'
        }
      }
    };
    /*this.content = `<input ghaoInput name="data.fgsfksq20171010.sqr"
    [(ngModel)]="this.data.fgsfksq20171010.sqr"
    init-model="data.fgsfksq20171010.initData.sqr" validate="{'required':true}" />`;*/
    this.content = `
      <div align="center" style="padding-top: 30px;">
<style>
    .zw_formdata th{
        text-align: center;
        vertical-align: middle;
        font-size: 14px;
    }
    .zw_formdata td{
        vertical-align: middle;
        height: 22px;;
    }

    .table_form_input_group{
        height: 20px;
        line-height: 20px;
        text-align: left!important;
    }
    .zw_formdata .select-dropdown{
        color:#000000;
    }
    .dad{
        margin: 0;
        display: flex;
        justify-content:center;
        flex-wrap:wrap;
        flex-direction:row;

    }
    .dad dl{
        margin: 0;
        flex: 1;
        max-width: 100%;
        min-width: 33.33%;
    }
    .dad dt{
        height: 45px;
        line-height: 20px;
        border-left: 1px solid #000000;
        border-bottom: 1px solid #000000;
        text-align: center;
font-size: 14px;

    }
    .dad dd{
        height: 57px;
        border-bottom: 1px solid #000000;
        border-left: 1px solid #000000;
        text-align: center;
    }
</style>
<table class="zw_formdata" style="WORD-WRAP: break-word; BORDER-TOP: medium none; BORDER-RIGHT: medium none; WIDTH: 677px;
BORDER-COLLAPSE: collapse; TABLE-LAYOUT: fixed; BORDER-BOTTOM: medium none; BORDER-LEFT: medium none" bordercolor="buttontext" border="0">
<colgroup>
    <col style="WIDTH: 71px" />
    <col style="WIDTH: 42px" />
    <col style="WIDTH: 56px" />
    <col style="WIDTH: 57px" />
    <col style="WIDTH: 28px" />
    <col style="WIDTH: 52px" />
    <col style="WIDTH: 32px" />
    <col style="WIDTH: 66px" />
    <col style="WIDTH: 47px" />
    <col style="WIDTH: 55px" />
    <col style="WIDTH: 54px" />
    <col style="WIDTH: 4px" />
    <col style="WIDTH: 113px" />
</colgroup>
<tbody valign="top">
<tr style="MIN-HEIGHT: 38px">
    <th  class="form-title" colspan="13" style="border: 0px; font-size: 22px; height: 30px;"> 付 款 申 请 单</th>
</tr>
<tr style="MIN-HEIGHT: 4px">
    <th  ng-if="permission.fields.jtfk20171011.fklx!='n'" style="border: 0px;" > 付款类型:</th>
    <td class="form_text_color_blue "  ng-if="permission.fields.jtfk20171011.fklx!='n'" colspan="5" style="border: 0px;">
        <div class="zw-select-div-width cellphone-nowrap-ellipsis">

            </div>
    </td>
    <th  ng-if="permission.fields.jtfk20171011.ssgs!='n'" style="border: 0px;"   colspan="2" >  </th>
    <td  colspan="5" style="border: 0px;">

    </td>
</tr>
<tr style="MIN-HEIGHT: 4px">
    <th ng-if="permission.fields.jtfk20171011.fkdw!='n'" style="border: 0px;"> 付款单位:</th>
    <td class="form_text_color_blue " ng-if="permission.fields.jtfk20171011.fkdw!='n'" colspan="5" style="border: 0px;">
        <div class="zw-select-div-width cellphone-nowrap-ellipsis">

        </div>
    </td>
    <th ng-if="permission.fields.jtfk20171011.lsh!='n'" style="border: 0px;text-align: right;"> NO. </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.lsh!='n'" style="border: 0px;">
        <label zw-serial ng-bind="data.jtfk20171011.lsh" pemission="permission.fields.jtfk20171011.lsh">{{serial}}</label>
    </td>
    <th ng-if="permission.fields.jtfk20171011.rqxzq!='n'" colspan="2" style="border: 0px; text-align: right;"> 申请日期: </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.rqxzq!='n'" colspan="3"  style="border: 0px;">
        <div class="table_form_input_group">
            <input desc="日期选择器" class="form_type_text" type="text" [(ngModel)]="data.jtfk20171011.rqxzq"
            permission="permission.fields.jtfk20171011.rqxzq"  zw-validate="{'required':true,'date':true}" zw-date="yyyy-mm-dd"
                   data-init-model="init.user.sysdate" disabled />
            <span class="fa fa-calendar table_form_time_sap" ng-class="{'r':'none'}[permission.fields.jtfk20171011.rqxzq]">
</span><span ng-show="flag">{{ data.jtfk20171011.rqxzq | date: 'yyyy-MM-dd'}}</span>
        </div>
    </td>
</tr>
<tr style="MIN-HEIGHT: 4px">
    <th ng-if="permission.fields.jtfk20171011.sqbm!='n'" style="height: 40px;" colspan="3"> 申请付款部门 </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.sqbm!='n'" colspan="4">
        <input zw-input="data.jtfk20171011.sqbm" desc="申请部门"  class="form_type_text" data-init-model="init.user.dept" type="text"
               [(ngModel)]="data.jtfk20171011.sqbm" permission="permission.fields.jtfk20171011.sqbm"
               zw-validate="{'maxLength':255,'required':true}" />
    </td>
    <th ng-if="permission.fields.jtfk20171011.sqr!='n'" colspan="3"> 付款申请人 </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.sqr!='n'" colspan="3">
        <input zw-input="data.jtfk20171011.sqr" desc="申请人"  class="form_type_text" data-init-model="init.user.name" type="text"
               [(ngModel)]="data.jtfk20171011.sqr" permission="permission.fields.jtfk20171011.sqr"
               zw-validate="{'maxLength':255,'required':true}" />
    </td>
</tr>
<tr style="MIN-HEIGHT: 4px">
    <th ng-if="permission.fields.jtfk20171011.htbh!='n'" colspan="3"> 合同编号 </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.htbh!='n'" colspan="4">
        <input zw-input="data.jtfk20171011.htbh" desc="合同编号"  class="form_type_text" type="text" [(ngModel)]="data.jtfk20171011.htbh"
               permission="permission.fields.jtfk20171011.htbh"  zw-validate="{'maxLength':255,'required':false}" />
    </td>
    <th ng-if="permission.fields.jtfk20171011.fph!='n'" colspan="3"> 发票号码 </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.fph!='n'" colspan="3">
        <input zw-input="data.jtfk20171011.fph" desc="发票号"  class="form_type_text" type="text" [(ngModel)]="data.jtfk20171011.fph"
               permission="permission.fields.jtfk20171011.fph"  zw-validate="{'maxLength':255,'required':false}" />
    </td>
</tr>
<tr style="MIN-HEIGHT: 4px">
    <th colspan="3" rowspan="2"> 付款金额 </th>
    <th ng-if="permission.fields.jtfk20171011.bz!='n'" colspan="2" rowspan="2">
        币种:
    </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.bz!='n'" colspan="2" rowspan="2">
        <div class="zw-select-div-width" >

        </div>
    </td>
    <th ng-if="permission.fields.jtfk20171011.jexx!='n'"> 金额小写 </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.jexx!='n'" colspan="5">
        <input desc="金额小写"  class="form_type_text" type="text" [(ngModel)]="data.jtfk20171011.jexx"
               permission="permission.fields.jtfk20171011.jexx"
               zw-validate="{'required':true,'maxDecimalLen':2,'maxIntLen':30,'number':true}"
               zw-number="{'isShowComdify':true,'decimalValue':'2','intValue':''}" />
    </td>
</tr>
<tr style="MIN-HEIGHT: 4px">
    <th ng-if="permission.fields.jtfk20171011.jtzjl28!='n'"> 金额大写 </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.jtzjl28!='n'" colspan="5">
        <label zw-label data-init="" [(ngModel)]="data.jtfk20171011.jexx">{{data.jtfk20171011.jexx}}</label>
    </td>
</tr>
<tr style="MIN-HEIGHT: 4px">
    <th ng-if="permission.fields.jtfk20171011.fkfs!='n'" colspan="3"> 付款方式 </th>
    <th ng-if="permission.fields.jtfk20171011.skdw!='n'" colspan="4">
        收款单位名称
    </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.skdw!='n'" colspan="6">
        <input zw-input="data.jtfk20171011.skdw" desc="收款单位"  class="form_type_text" type="text" [(ngModel)]="data.jtfk20171011.skdw"
               permission="permission.fields.jtfk20171011.skdw"  zw-validate="{'maxLength':255,'required':false}" />
    </td>
</tr>
<tr style="MIN-HEIGHT: 4px">
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.fkfs!='n'" colspan="3" rowspan="2">
        <div class="zw-select-div-width">

        </div>
    </td>
    <th ng-if="permission.fields.jtfk20171011.khx!='n'" colspan="4"> 开户银行 </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.khx!='n'" colspan="6">
        <input zw-input="data.jtfk20171011.khx" desc="开户行"  class="form_type_text" type="text" [(ngModel)]="data.jtfk20171011.khx"
               permission="permission.fields.jtfk20171011.khx"  zw-validate="{'maxLength':255,'required':false}" />
    </td>
</tr>
<tr style="MIN-HEIGHT: 4px">
    <th ng-if="permission.fields.jtfk20171011.yxzh!='n'" colspan="4"> 银行账号 </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.yxzh!='n'" colspan="6">
        <input zw-bank="" formater = "{separator:'',size:4}" class="form_type_text" data-init="" type="text"
        [(ngModel)]="data.jtfk20171011.yxzh"
               permission="permission.fields.jtfk20171011.yxzh"  zw-validate="{'maxLength':255,'required':false}" />
    </td>
</tr>
<tr style="MIN-HEIGHT: 19px">
    <th ng-if="permission.fields.jtfk20171011.zp!='n'" colspan="2">
        支票
    </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.zp!='n'" colspan="2">
        <input zw-input="data.jtfk20171011.zp" desc="支票"  class="form_type_text" type="text" [(ngModel)]="data.jtfk20171011.zp"
               permission="permission.fields.jtfk20171011.zp"  zw-validate="{'maxLength':255,'required':false}" />
    </td>
    <th ng-if="permission.fields.jtfk20171011.dh!='n'" colspan="3">
        电汇
    </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.dh!='n'" colspan="2">
        <input zw-input="data.jtfk20171011.dh" desc="电汇"  class="form_type_text" type="text" [(ngModel)]="data.jtfk20171011.dh"
               permission="permission.fields.jtfk20171011.dh"  zw-validate="{'maxLength':255,'required':false}" />
    </td>
    <th ng-if="permission.fields.jtfk20171011.cdhp!='n'" colspan="2"> 承兑汇票 </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.cdhp!='n'" colspan="2">
        <input zw-input="data.jtfk20171011.cdhp" desc="承兑汇票"  class="form_type_text" type="text" [(ngModel)]="data.jtfk20171011.cdhp"
               permission="permission.fields.jtfk20171011.cdhp"  zw-validate="{'maxLength':255,'required':false}" />
    </td>
</tr>
<tr style="MIN-HEIGHT: 54px">
    <th ng-if="permission.fields.jtfk20171011.fknr!='n'" colspan="3">
        付款内容
    </th>
    <td class="form_text_color_blue" ng-if="permission.fields.jtfk20171011.fknr!='n'" colspan="10" style="height: 50px;">
        <textarea style="height: 48px;" zw-textarea="data.jtfk20171011.fknr" desc="付款内容" data-init=''
        class="form_type_textarea" [(ngModel)]="data.jtfk20171011.fknr"
                  permission="permission.fields.jtfk20171011.fknr"  zw-validate="{'required':false}" > </textarea>
    </td>
</tr>
</tbody>
</table>
</div>


-{{items}}-
    `;
  }

  ngOnInit() {

  }

}
