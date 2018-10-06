import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
 
import { SubscriptionComponent } from './subscription.component';

import { SubRoutes } from './subscription.routes';
import { FormComponent } from './form/form.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SubRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SubscriptionComponent, FormComponent]
})
export class SubscriptionModule { }
