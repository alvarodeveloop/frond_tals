import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseRoutes } from './enterprise.routes';
import { FormComponent } from './form/form.component';
import { PublicityComponent } from './publicity/publicity.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EnterpriseRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    EnterpriseComponent, 
    FormComponent, PublicityComponent
  ]

})
export class EnterpriseModule { }
