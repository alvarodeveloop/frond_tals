import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { InteractionComponent } from './interaction.component';
import { InteractionRoutes } from './interaction.routes';
import { EnterpriseFreeComponent } from './enterprise-free/enterprise-free.component';
import { InitializeComponent } from './initialize/initialize.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(InteractionRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [InteractionComponent, EnterpriseFreeComponent, InitializeComponent]
})
export class InteractionModule { }
