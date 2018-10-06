import { Routes } from '@angular/router'

import { AnimationsComponent } from './animations.component'
import { FormComponent } from './form/form.component'
import { ManageComponent } from './manage/manage.component'

export const AnimationsRoutes : Routes = [
    {
      path: '',
      component: AnimationsComponent
    },
    {
      path: 'form',
      component: FormComponent
    },
    {
      path: 'manage/:id',
      component: ManageComponent
    }
]