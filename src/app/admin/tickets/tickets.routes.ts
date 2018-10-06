import { Routes } from '@angular/router'

import { TicketsComponent } from './tickets.component'
import { ManageComponent } from './manage/manage.component'

export const TicketRoutes : Routes = [
    {
      path: '',
      component: TicketsComponent
    },
    {
      path: 'manage/:id',
      component: ManageComponent
    }
    /*{
      path: 'form',
      component: FormComponent
    },
    {
      path: 'form/:id',
      component: FormComponent
    }*/
]