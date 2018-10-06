import { Routes } from '@angular/router'

import { TicketComponent } from './ticket.component'
import { FormComponent } from './form/form.component'
import { ManageComponent } from './manage/manage.component'

export const TicketRoutes : Routes = [
   {
     path: '',
     component: TicketComponent
   },
   {
     path: 'form',
     component: FormComponent
   },
   {
     path: 'manage/:id',
     component: ManageComponent
   },
]