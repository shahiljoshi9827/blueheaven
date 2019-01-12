import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  constructor(public _http:HttpClient) { }
  private order="http://localhost:3000/order/";

  getpastorder(){
    return this._http.get(this.order);

  }
  }
