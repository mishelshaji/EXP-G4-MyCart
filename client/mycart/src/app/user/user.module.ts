import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';


@NgModule({
  declarations: [
    UserLayoutComponent,
    RegisterComponent,
    UserLayoutComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
