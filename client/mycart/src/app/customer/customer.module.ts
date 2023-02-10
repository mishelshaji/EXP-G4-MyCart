import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerNavbarComponent } from './shared/customer-navbar/customer-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from "../shared/footer/footer.component";
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CustomerLayoutComponent,
        CartComponent,
        CartItemComponent,
        CustomerHomeComponent,
        CustomerNavbarComponent,
        FeedbackComponent,
        
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FontAwesomeModule,
        FooterComponent,
        FormsModule
    ]
})
export class CustomerModule { }
