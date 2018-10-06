import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AnimationsComponent } from './animations.component';
import { FormComponent } from './form/form.component';

import { AnimationsRoutes } from './animations.route';
import { ManageComponent } from './manage/manage.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AnimationsRoutes)
  ],
  declarations: [AnimationsComponent, FormComponent, ManageComponent]
})
export class AnimationsModule { }
