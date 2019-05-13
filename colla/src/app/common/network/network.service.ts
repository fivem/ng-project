import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  constructor(private http: HttpClient) {
    this.http = http;
  }
  get(url,tgt){
    return this.http.get(url,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        't-data' : tgt
      }
    });
  }
  post(url,body){
    return this.http.post(url,body,{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      responseType:'text'
    });
  }
}
