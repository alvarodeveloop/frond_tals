import { Routes } from '@angular/router'
import { InteractionComponent } from './interaction.component'
import { EnterpriseFreeComponent } from './enterprise-free/enterprise-free.component'
import { InitializeComponent } from './initialize/initialize.component'

export const InteractionRoutes: Routes = [
  {
    path:'',
    component: InteractionComponent
  },
  {
    path: 'enterprise/:id',
    component: EnterpriseFreeComponent
  },
  {
    path:'initialize/:id',
    component: InitializeComponent
  }
]