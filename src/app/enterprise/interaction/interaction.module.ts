import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InteractionComponent } from './interaction.component';

import { InteractionRoutes } from './interaction.routes'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InteractionRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InteractionComponent]
})
export class InteractionModule { }
