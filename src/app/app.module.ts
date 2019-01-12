import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { MenubarComponent } from './menubar/menubar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { DisplayuserComponent } from './displayuser/displayuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {MatInputModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule ,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatGridListModule,
        MatMenuModule,
        MatExpansionModule,
        MatTableModule,
        MatCheckboxModule,
        MatCheckbox,
        MatPaginatorModule,
        MAT_DIALOG_DEFAULT_OPTIONS,
        MatDialogModule


      } from '@angular/material';
import { ProductComponent } from './admin/product/product.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { HomeComponent } from './admin/home/home.component';
import { MenuComponent } from './admin/menu/menu.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { ProductdisplayComponent } from './admin/product/productdisplay/productdisplay.component';
import { UpdateproductComponent } from './admin/product/updateproduct/updateproduct.component';
import { OrderComponent } from './admin/order/order.component';
import { FeedbackComponent } from './admin/feedback/feedback.component';
import { ManageuserComponent } from './admin/manageuser/manageuser.component';
import { FeedbackreplayComponent } from './admin/feedback/feedbackreplay/feedbackreplay.component';
import { feedbackclass } from './models/feedback_class';
import { AdduserComponent } from './admin/manageuser/adduser/adduser.component';
import { UpdateuserComponent } from './admin/manageuser/updateuser/updateuser.component';
@NgModule({
  declarations: [
    AppComponent,
    SignuppageComponent,
    LoginpageComponent,
    MenubarComponent,
    DisplayuserComponent,
    EdituserComponent,
    ForgetpasswordComponent,
    ProductComponent,
    DisplayproductComponent,
    HomeComponent,
    MenuComponent,
    AdminloginComponent,
    ProductdisplayComponent,
    UpdateproductComponent,
    OrderComponent,
    FeedbackComponent,
    ManageuserComponent,
    FeedbackreplayComponent,
    AdduserComponent,
    UpdateuserComponent
     ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    routing,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents:[FeedbackreplayComponent]
})
export class AppModule { }

