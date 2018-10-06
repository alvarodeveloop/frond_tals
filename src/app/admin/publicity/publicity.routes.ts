import { Routes } from '@angular/router'

import { PublicityComponent } from './publicity.component'
import { FormComponent } from './form/form.component'

export const PublicityRoutes : Routes = [
    {
      path: '',
      component: PublicityComponent
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