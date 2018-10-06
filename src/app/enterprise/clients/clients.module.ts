import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ClientsComponent } from './clients.component';
 
import { ClientsRoutes } from './clients.route';
import { FormComponent } from './form/form.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientsRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ClientsComponent, FormComponent]
})
export class ClientsModule { }
