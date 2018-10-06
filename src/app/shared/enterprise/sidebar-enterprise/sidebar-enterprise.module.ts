import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarEnterpriseComponent } from './sidebar-enterprise.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarEnterpriseComponent],
  declarations: [SidebarEnterpriseComponent]
})
export class SidebarEnterpriseModule { }
