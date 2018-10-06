import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


import { PublicityComponent } from './publicity.component';
import { PublicityRoutes } from './publicity.routes';
import { FormComponent } from './form/form.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PublicityRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PublicityComponent, FormComponent]
})
export class PublicityModule { }
