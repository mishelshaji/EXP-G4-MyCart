import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from '../customer/shared/cart-item/cart-item.component';
import { CartComponent } from '../customer/cart/cart.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
