import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { TicketsComponent } from './tickets.component';

import { TicketRoutes } from './tickets.routes';
import { ManageComponent } from './manage/manage.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TicketRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TicketsComponent, ManageComponent]
})
export class TicketsModule { }
