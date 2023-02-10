import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../shared/home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  {
    path: '', component: CustomerLayoutComponent, children: [
      { path: 'cart', component: CartComponent },
      { path: 'home', component: CustomerHomeComponent },
      { path: 'order-summary', component: OrderSummaryComponent },
      { path: 'feedback' , component: FeedbackComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
