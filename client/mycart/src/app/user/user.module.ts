import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from '../shared/home-page/home-page.component';
import { FooterComponent } from "../shared/footer/footer.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    UserLayoutComponent,
    RegisterComponent,
    UserLayoutComponent,
    OtpComponent,
    LandingPageComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    NavbarComponent,
    FontAwesomeModule,
    HomePageComponent,
    FooterComponent
  ]
})
export class UserModule { 
}
