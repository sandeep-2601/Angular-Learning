import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/WarningAlert.component';
import { AsmtTwoComponent } from './asmt-two/asmt-two.component';
import { AsmtThreeComponent } from './asmt-three/asmt-three.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { AccountDetailComponent } from './services/account-detail/account-detail.component';
import { AsmtFourComponent } from './asmt-four/asmt-four.component';
import { ActiveUsersComponent } from './asmt-four/active-users/active-users.component';
import { InactiveUsersComponent } from './asmt-four/inactive-users/inactive-users.component';
import { RoutingComponent } from './routing/routing.component';
import { UsersComponent } from './routing/users/users.component';
import { RheaderComponent } from './routing/rheader/rheader.component';
import { RserverComponent } from './routing/rserver/rserver.component';
import { HomeComponent } from './routing/home/home.component';
import { UserComponent } from './routing/users/user/user.component';
import { ServereditComponent } from './routing/rserver/serveredit/serveredit.component';
import { ServerdetailComponent } from './routing/rserver/serverdetail/serverdetail.component';
import { AppRouterModule } from './app-router.module';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsAssignmentComponent } from './forms-assignment/forms-assignment';
import { HttpComponent } from './http/http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ObservablesComponent } from './observables/observables.component';
import { AuthInterceptor } from './http/auth-interceptor.service';
import { LoggingInterceptor } from './http/logging-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    AsmtTwoComponent,
    AsmtThreeComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ServicesComponent,
    AccountComponent,
    AccountDetailComponent,
    AsmtFourComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutingComponent,
    UsersComponent,
    RheaderComponent,
    RserverComponent,
    HomeComponent,
    UserComponent,
    ServereditComponent,
    ServerdetailComponent,
    FormsComponent,
    ReactiveFormsComponent,
    FormsAssignmentComponent,
    HttpComponent,
    ObservablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
