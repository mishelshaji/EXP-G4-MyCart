import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';


@NgModule({
  declarations: [
    CustomerLayoutComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
