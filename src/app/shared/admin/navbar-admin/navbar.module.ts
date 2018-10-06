import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { NavbarAdminComponent } from './navbar-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarAdminComponent
  ],
  exports:[NavbarAdminComponent]
})
export class NavbarModule { }
