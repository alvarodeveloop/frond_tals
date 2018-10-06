import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { TicketsComponent } from './tickets.component';
import { TicketsRoutes } from './tickets.routes';
import { FormComponent } from './form/form.component';
import { ManageComponent } from './manage/manage.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TicketsRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TicketsComponent, FormComponent, ManageComponent]
})
export class TicketsModule { }
