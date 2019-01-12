import { Routes,RouterModule } from '@angular/router';
import { SignuppageComponent } from "./signuppage/signuppage.component";
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './admin/product/product.component';
import { HomeComponent } from './admin/home/home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ProductdisplayComponent } from './admin/product/productdisplay/productdisplay.component';
import { UpdateproductComponent } from './admin/product/updateproduct/updateproduct.component';
import { OrderComponent } from './admin/order/order.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { ManageuserComponent } from './admin/manageuser/manageuser.component';
import { FeedbackreplayComponent } from './admin/feedback/feedbackreplay/feedbackreplay.component';
import { MenuComponent } from './admin/menu/menu.component';
import { AdduserComponent } from './admin/manageuser/adduser/adduser.component';
import { UpdateuserComponent } from "./admin/manageuser/updateuser/updateuser.component";
	  const arr:Routes=[
      {path:'login',component:LoginpageComponent},
      {path:'menu',component:MenuComponent,children:[
         {path:'home',component:HomeComponent},
             {path:'signup',component:SignuppageComponent},
      {path:'displayuser/:user_email_id',component:DisplayuserComponent},
      {path:'edituser/:user_email_id',component:EdituserComponent},
      {path:'forgetpassword',component:ForgetpasswordComponent},
      {path:'product',component:ProductComponent},
      {path:'productdisplay',component:ProductdisplayComponent},
      {path:'productupdate/:product_id',component:UpdateproductComponent},
      {path:'order',component:OrderComponent},
      {path:'feedback',component:FeedbackComponent},
      {path:'manageuser',component:ManageuserComponent},
      {path:'feedbackreplay/:id',component:FeedbackreplayComponent},
      {path:'adduser',component:AdduserComponent},
      {path:'updateuseradmin/:user_email_id',component:UpdateuserComponent}
      ]},
      {path:'',component:AdminloginComponent}

    ];

  export const routing=RouterModule.forRoot(arr);
