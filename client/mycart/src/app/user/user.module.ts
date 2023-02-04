import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LandingPageComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NavbarComponent,
    FontAwesomeModule
  ]
})
export class UserModule { 
 
}
