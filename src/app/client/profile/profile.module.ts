import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { ProfileComponent } from './profile.component';
import { ProfileRoutes } from './profile.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
