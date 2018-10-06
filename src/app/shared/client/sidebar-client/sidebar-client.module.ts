import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarClientComponent } from './sidebar-client.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidebarClientComponent],
  declarations: [SidebarClientComponent]
})
export class SidebarClientModule { }
