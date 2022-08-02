import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {HomePageComponent} from './user/home-page/home-page.component';
import {ListProductComponent} from './user/list-product/list-product.component';
import {JwtInterceptor} from "./helper/jwt-interceptor";
import {ErrorInterceptor} from "./helper/error-interceptor";
import { CreateWalletComponent } from './user/create-wallet/create-wallet.component';
import { ListMoneyTypeComponent } from './component/list-money-type/list-money-type.component';
import { EditWalletComponent } from './user/edit-wallet/edit-wallet.component';
import { ShowWalletComponent } from './user/show-wallet/show-wallet.component';
import { ShowAllDeleteWalletComponent } from './user/show-all-delete-wallet/show-all-delete-wallet.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ProfileComponent } from './user/profile/profile.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    ListProductComponent,
    CreateWalletComponent,
    ListMoneyTypeComponent,
    EditWalletComponent,
    ShowWalletComponent,
    ShowAllDeleteWalletComponent,
    ChangePasswordComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor, multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
