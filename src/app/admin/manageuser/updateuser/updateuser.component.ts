import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../../../service/user-service.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Userclass } from '../../../models/user_class';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private ser:UserServiceService,private _route:Router,private _aroute:ActivatedRoute) { }
  public user_email_id:string;
  public user_name:string;
  public user_mobile_no:string;
  public user_gender:string;
  public user_dob:string;
  public user_address:string;
  public userarr:Userclass[];

  ngOnInit() {
    this.user_email_id=this._aroute.snapshot.params['user_email_id'];
    console.log(this.user_email_id);
    this.ser.getuserbyid(this.user_email_id).subscribe(
      (data:any)=>{
        console.log(data);
        this.userarr=data;
         this.user_name=data[0].user_name;
         this.user_mobile_no=data[0].user_mobile_no;
         this.user_gender=data[0].user_gender;
         this.user_dob=data[0].user_dob.substring(0,10);
         this.user_address=data[0].user_address;

      }
    )
  }
  saveprofile(){
    this.ser.updateuserdata(new Userclass(this.user_email_id,this.user_name,this.user_mobile_no,this.user_gender,this.user_dob,this.user_address)).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/menu/manageuser']);
      }
    );

  }
}
