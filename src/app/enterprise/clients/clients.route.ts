import { Routes } from '@angular/router'

import { ClientsComponent } from './clients.component'
import { FormComponent } from './form/form.component'

export const ClientsRoutes : Routes = [
    {
      path: '',
      component: ClientsComponent
    },
    {
      path: 'form',
      component: FormComponent
    },
    {
      path: 'form/:id',
      component: FormComponent
    }
]