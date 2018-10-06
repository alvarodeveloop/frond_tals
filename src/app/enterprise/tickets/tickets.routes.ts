import { Routes } from '@angular/router'
import { TicketsComponent } from './tickets.component'
import { FormComponent } from './form/form.component'
import { ManageComponent } from './manage/manage.component'

export const TicketsRoutes : Routes = [
  {
    path: "",
    component: TicketsComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "manage/:id",
    component: ManageComponent
  }
]