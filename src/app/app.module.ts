// modulos
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { FooterModule } from './shared/admin/footer-admin/footer.module';
import { NavbarModule } from './shared/admin/navbar-admin/navbar.module';
import { SidebarAdminModule } from './shared/admin/sidebar-admin/sidebar-admin.module';
import { SidebarEnterpriseModule } from './shared/enterprise/sidebar-enterprise/sidebar-enterprise.module';
import { SidebarClientModule } from './shared/client/sidebar-client/sidebar-client.module';

//componentes
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component'
import { EnterpriseComponent } from './layout/enterprise/enterprise.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component'
import { VerifyAccountComponent } from './login/verify-account/verify-account/verify-account.component';
import { VerifyTokenComponent } from './login/verify-token/verify-token.component';
import { UserRegisterComponent } from './login/user-register/user-register.component';
import { InitializeComponent } from './client/interacion/initialize/initialize.component';


//servicios
import { AdminEnterpriseService } from './service/admin-enterprise.service';
import { PublicityService } from './service/publicity.service';
import { ProfileService } from './service/profile.service';
import { ClientsService } from './service/clients.service';
import { SessionService } from './service/session.service';
import { MasterService } from './service/master.service';
import { SubscriptionService } from './service/subscription.service';
import { ClientSessionService } from './service/client-session.service';
import { AnimationsService } from './service/animations.service';
import { InteractionService } from './service/interaction.service';
import { WebsocketService } from './service/websocket.service';

//rutas
import { AppRoutes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EnterpriseComponent,
    UserRegisterComponent,
    ClientComponent,
    InitializeComponent,
    AdminLoginComponent,
    VerifyAccountComponent,
    VerifyTokenComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule,
    FooterModule,
    NavbarModule,
    SidebarAdminModule,
    SidebarEnterpriseModule,
    SidebarClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AdminEnterpriseService,
    PublicityService,
    SessionService,
    ProfileService,
    ClientsService,
    MasterService,
    SubscriptionService,
    ClientSessionService,
    AnimationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
