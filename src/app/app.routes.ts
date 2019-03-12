import { Routes } from '@angular/router';

import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { EnterpriseComponent } from './layout/enterprise/enterprise.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component'
import { VerifyAccountComponent } from './login/verify-account/verify-account/verify-account.component'
import { VerifyTokenComponent } from './login/verify-token/verify-token.component'
import { UserRegisterComponent } from './login/user-register/user-register.component'

import { SessionService } from './service/session.service';
import { SessionEnterpriseService } from './service/session-enterprise.service'
import { ClientSessionService } from './service/client-session.service';

export const AppRoutes: Routes = [
{
  path: '',
    redirectTo: 'login',
    pathMatch: 'full',
},
{
  path: 'client',
  component: ClientComponent,
  canActivate: [ClientSessionService],
  children: [
    {
      path: 'tickets',
      loadChildren: './client/ticket/ticket.module#TicketModule'
    },
    {
      path: 'profile',
      loadChildren: './client/profile/profile.module#ProfileModule'
    },
    {
      path: 'interaction',
      loadChildren: './client/interaction/interaction.module#InteractionModule'
    },
    {
      path: 'demo',
      loadChildren: './client/demo/demo.module#DemoModule'
    }
  ]
},
{
  path:'admin',
  component: AdminComponent,
  canActivate: [SessionService],
  children:[
    {
      path: 'enterprise',
      loadChildren: './admin/enterprise/enterprise.module#EnterpriseModule'
    },
    {
      path: 'publicity',
      loadChildren: './admin/publicity/publicity.module#PublicityModule'
    },
    {
      path: 'animations',
      loadChildren: './admin/animations/animations.module#AnimationsModule'
    },
    {
      path: 'profile',
      loadChildren: './admin/profile/profile.module#ProfileModule'
    },
    {
      path: 'tickets',
      loadChildren: './admin/tickets/tickets.module#TicketsModule'
    },
    {
      path: 'subscription',
      loadChildren: './admin/subscription/subscription.module#SubscriptionModule'
    }
  ]
},
{
  path:'enterprise',
  component: EnterpriseComponent,
  canActivate: [SessionEnterpriseService],
  children:[
    {
      path: 'clients',
      loadChildren: './enterprise/clients/clients.module#ClientsModule'
    },
    {
      path: 'profile',
      loadChildren: './enterprise/profile/profile.module#ProfileModule'
    },
    {
      path: 'publicity',
      loadChildren: './enterprise/publicity/publicity.module#PublicityModule'
    },
    {
      path: 'subscription',
      loadChildren: './enterprise/subscription/subscription.module#SubscriptionModule'
    },
    {
      path: 'tickets',
      loadChildren: './enterprise/tickets/tickets.module#TicketsModule'
    },
    {
      path: 'interaction',
      loadChildren: './enterprise/interaction/interaction.module#InteractionModule'
    }
  ]
},
{
  path: 'login',
  component: AdminLoginComponent,
},
{
  path: 'login/verify_account',
  component: VerifyAccountComponent
},
{
  path: 'login/verify_token',
  component: VerifyTokenComponent
},
{
  path: 'user_register',
  component: UserRegisterComponent
}
]