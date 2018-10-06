import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLoginComponent } from './admin-login.component'


import { LoginAdminService } from '../../service/login-admin.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
    //FormsModule,
    //ReactiveFormsModule
  ],
  declarations: [AdminLoginComponent],
  providers: [LoginAdminService]
})
export class AdminLoginModule { }
