import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProfileComponent } from './profile.component';

import { ProfileRoutes } from './profile.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
