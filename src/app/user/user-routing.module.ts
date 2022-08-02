import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListProductComponent} from "./list-product/list-product.component";
import {RegisterComponent} from "../register/register.component";
import {CreateWalletComponent} from "./create-wallet/create-wallet.component";

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserRoutingModule { }
