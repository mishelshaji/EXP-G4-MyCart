import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from '../customer/shared/cart-item/cart-item.component';
import { CartComponent } from '../customer/cart/cart.component';
import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from "../shared/footer/footer.component";

@NgModule({
    declarations: [
        LandingPageComponent,
        UserLayoutComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        FormsModule,
        NavbarComponent,
        FontAwesomeModule,
        FooterComponent
    ]
})
export class UserModule { }