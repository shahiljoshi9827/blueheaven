import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { productclass } from '../models/product_class';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public _http:HttpClient) { }
  private add_get_update_getbyid_product="http://localhost:3000/add_get_updateimage_getbyid_product/";
  private productjoin_update="http://localhost:3000/productjoin_update/";


  addproduct(product_class:FormData){
    return this._http.post(this.add_get_update_getbyid_product,product_class);
  }
  updateproduct(item:productclass){
    let x=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.productjoin_update+item.product_id,x,{headers:h});
  }
  getallproduct()
  {
    return this._http.get(this.add_get_update_getbyid_product);
  }
  getproductbyid(product_id)
  {
    return this._http.get(this.add_get_update_getbyid_product+product_id);
  }
  updateProduct_image(item:FormData)
  {
    return this._http.put(this.add_get_update_getbyid_product,item)
  }
  deleteproduct(item){
    return this._http.delete(this.add_get_update_getbyid_product+item.product_id)
  }
  deleteall(item:productclass[]){
    let h=new HttpHeaders().set('Content-Type','application/json');
    let x=JSON.stringify(item);
    return this._http.post(this.productjoin_update,x,{headers:h});

  }
}
