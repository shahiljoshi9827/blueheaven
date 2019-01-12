import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserServiceService } from "../service/user-service.service";
import { Userclass } from "../models/user_class";
import { Userclasslogin } from '../models/user_class_login';
import { Router } from "@angular/router";
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private ser:UserServiceService,private _route:Router) { }
  user_email_id:string;
  user_password:string;
  public flag:boolean=true;
  ngOnInit() {
  }
  loginuser(){

    this.ser.login(new Userclasslogin(this.user_email_id,this.user_password)).subscribe(
      (data:any[])=>{
        console.log(data);
        console.log(data.length)
        if (data.length>0)
        {
          this._route.navigate(['/displayuser',this.user_email_id]);
        }
        else
        {
          alert("your Email Id or Passwod is Incorect");
        }
      }
    )
    console.log(this.user_email_id);
    console.log(this.user_password);
  }
  cancel()
  {
    this.user_email_id='';
    this.user_password='';
  }
  forgetpassword()
  {
    this._route.navigate(['/forgetpassword']);
  }
signupuser(){
  this._route.navigate(['/signup']);
}
}
