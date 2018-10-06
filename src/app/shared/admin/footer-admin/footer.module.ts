import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { FooterAdminComponent } from './footer-admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterAdminComponent],
  exports: [FooterAdminComponent]
})
export class FooterModule { }
