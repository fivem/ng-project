import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  constructor(private http: HttpClient) {
    this.http = http;
  }
  get(url, tgt) {
    return this.http.get(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        't-data' : tgt
      }
    });
  }
  post(url, body) {
    body = {
      data: `{
        totalCount: 1,
        state: '0',
        msg: '操作成功',
        list: [{
          hasSubject: '1',
          def: {
            procDefName: '分公司付款申请20171010',
            typeId: '财务审批'
          },
          form: {
            id: '10000001939076',
            formKey: 'fgsfksq2017_gygcxz',
            formHtml: '<form ><div align=\'center\' style=\'padding-top: 30px;\'>\n<style>\n    .zw_formdata th{\n        ' +
              'text-align: center;\n        vertical-align: middle;\n        font-size: 14px;\n    }\n    .zw_formdata td{\n    ' +
              '    vertical-align: middle;\n        height: 22px;;\n    }\n    .zw-select-div-width{\n       ' +
              ' width: 100% !important;\n    }\n    .table_form_input_group{\n        height: 20px;\n     ' +
              '   line-height: 20px;\n        text-align: left!important;\n    }\n    .zw_formdata .select-dropdown{\n        ' +
              'color:#000000;\n    }\n</style>\n      <input ghaoInput name=\'data.fgsfksq20171010.sqr\' ' +
              'permission=\'fgsfksq20171010.sqr\' [(ngModel)]=\'data.fgsfksq20171010.sqr\' ' +
              'init-model=\'data.fgsfksq20171010.initData.sqr\'/>          </div></form>',
            status: 'draft',
            isMain: 'Y',
            version: 1,
            busDataTemplateCount: 0,
            versionCount: 0,
            parentFlowKey: 'local_',
            type: 'INNER',
            formValue: 'fgsfksq2017_gygcxz',
            formType: 'pc'
          },
          data: {
            fgsfksq20171010: {
              rqxzq: '',
              fklxbd: '',
              skdw: '',
              sqbm: '',
              gybzbd: '',
              bz: '',
              fkfsbd: '',
              fgfz: '',
              gcglbxmfzrxzbd: '',
              bmzg: '',
              fph: '',
              dh: '',
              gjxmfzrxzbd: '',
              zp: '',
              ssgsbd: '',
              gcglbxmfzrxz: '',
              jtzjl: '',
              sqrID: '',
              htbh: '',
              lsh: '',
              jtcwfz: '',
              gscw: '',
              fkdwbd: '',
              gsfzr: '',
              sqr: '申请人',
              zgfz: '',
              sqbmID: '',
              initData: {

              },
              fklx: '',
              ssgs: '',
              fknr: '',
              cdhp: '',
              gybz: '',
              yxzh: '',
              jexx: '',
              khx: '',
              fkdw: '',
              fkfs: '',
              gjxmfzrxz: '',
              bzbd: '',
              xxje: '',
              jedx: ''
            }
          },
          permission: {
            fields: {
              fgsfksq20171010: {
                rqxzq: 'w',
                skdw: 'w',
                sqbm: 'w',
                jtzjl2728: 'w',
                bz: 'w',
                fgfz: 'r',
                bmzg: 'r',
                fph: 'w',
                jedx29: 'w',
                dh: 'w',
                zp: 'w',
                gcglbxmfzrxz: 'n',
                jtzjl: 'r',
                sqrID: 'w',
                htbh: 'w',
                lsh: 'w',
                jtcwfz: 'r',
                gscw: 'r',
                sqr: 'w',
                gsfzr: 'r',
                zgfz: 'r',
                sqbmID: 'w',
                fklx: 'w',
                ssgs: 'w',
                jtzjl27: 'w',
                gybz: 'n',
                cdhp: 'w',
                fknr: 'w',
                yxzh: 'w',
                khx: 'w',
                fkdw: 'w',
                fkfs: 'w',
                gjxmfzrxz: 'n',
                xxje: 'w'
              }
            }
          }
        }]
      }`,
      html: `{
        sysdate: '2019-05-14 10:38:47',
        signExist: '0'
      }`,
      id: 'form-001',
      name: '表单'
    };
    return this.http.post(url, body, {
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'text'
    });
  }
}
