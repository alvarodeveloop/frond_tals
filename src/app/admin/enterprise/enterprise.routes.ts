import { Routes } from '@angular/router'

import { EnterpriseComponent } from './enterprise.component'
import { FormComponent } from './form/form.component'
import { PublicityComponent } from './publicity/publicity.component'

export const EnterpriseRoutes : Routes = [
    {
      path: '',
      component: EnterpriseComponent
    },
    {
      path: 'form',
      component: FormComponent
    },
    {
      path: 'form/:id',
      component: FormComponent
    },
    {
      path: 'publicity/:id',
      component: PublicityComponent

    }
]