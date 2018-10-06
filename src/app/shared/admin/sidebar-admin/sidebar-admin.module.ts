import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarAdminComponent } from './sidebar-admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarAdminComponent],
  declarations: [SidebarAdminComponent]
})
export class SidebarAdminModule { }
