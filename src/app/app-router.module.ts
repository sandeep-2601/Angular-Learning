import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./routing/auth-guard.service";
import { DeactivateGuard } from "./routing/can-deactivate.service";
import { HomeComponent } from "./routing/home/home.component";
import { RserverComponent } from "./routing/rserver/rserver.component";
import { ServerdetailComponent } from "./routing/rserver/serverdetail/serverdetail.component";
import { ServereditComponent } from "./routing/rserver/serveredit/serveredit.component";
import { ServerResolver } from "./routing/server-resolver.service";
import { UserComponent } from "./routing/users/user/user.component";
import { UsersComponent } from "./routing/users/users.component";
const appRoutes: Routes = [
    { path:'',component: HomeComponent},
    { 
      path:'users',component: UsersComponent,canActivateChild:[AuthGuard],
      children : [{path:':id',component: UserComponent}]
    },
    {
      path:'servers',component: RserverComponent,canActivateChild:[AuthGuard],
      children:[
        {path:':id/edit',component: ServereditComponent,canDeactivate:[DeactivateGuard]},
        {path:':id',component: ServerdetailComponent,resolve:{server:ServerResolver}}
      ]
    },
    {path:'**',redirectTo:'',pathMatch:'full'}  
  ]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes) //,{useHash:true} this is used for old browsers if the server doesn't allow angular to perform routing
    ],
    exports:[
        RouterModule
    ]
})
export class AppRouterModule{

}