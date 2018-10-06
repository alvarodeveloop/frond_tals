import { Routes } from '@angular/router'

import { SubscriptionComponent } from './subscription.component'
import { FormComponent } from './form/form.component'

export const SubRoutes : Routes = [
  {
    path: '',
    component: SubscriptionComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'form/:id',
    component: FormComponent
  },
]