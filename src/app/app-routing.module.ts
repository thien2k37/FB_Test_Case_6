import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomePageComponent} from "./user/home-page/home-page.component";
import {AuthGuard} from "./helper/auth-guard";
import {CreateWalletComponent} from "./user/create-wallet/create-wallet.component";
import {EditWalletComponent} from "./user/edit-wallet/edit-wallet.component";
import {ShowWalletComponent} from "./user/show-wallet/show-wallet.component";
import {ShowAllDeleteWalletComponent} from "./user/show-all-delete-wallet/show-all-delete-wallet.component";
import {ChangePasswordComponent} from "./user/change-password/change-password.component";
import {ProfileComponent} from "./user/profile/profile.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
  path: 'user',
  canActivate: [AuthGuard],
  component: HomePageComponent,
  loadChildren: () => import('./user/user-routing.module').then(module => module.UserRoutingModule)
}, {
  path: 'user/create',
  component: CreateWalletComponent
}, {
  path: 'user/update/:id',
  component:  EditWalletComponent
},{
  path: 'user/show/:id',
  component: ShowWalletComponent
},{
  path: 'user/history',
  component: ShowAllDeleteWalletComponent
},{
  path: 'user/change',
  component: ChangePasswordComponent
},{
  path: 'user/profile',
  component: ProfileComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
