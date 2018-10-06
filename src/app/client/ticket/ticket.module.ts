import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { TicketComponent } from './ticket.component';
import { FormComponent } from './form/form.component';
import { ManageComponent } from './manage/manage.component';

import { TicketRoutes } from './ticket.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TicketRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [TicketComponent, FormComponent, ManageComponent]
})
export class TicketModule { }
