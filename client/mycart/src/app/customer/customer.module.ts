import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CustomerNavbarComponent } from './shared/customer-navbar/customer-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [
    CustomerHomeComponent,
    CustomerLayoutComponent,
    CustomerNavbarComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FontAwesomeModule
  ]
})
export class CustomerModule { 
}
