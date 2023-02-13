import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminNavbarComponent } from './shared/admin-navbar/admin-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { FooterComponent } from '../shared/footer/footer.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminLayoutComponent,
    AdminNavbarComponent,
    AddProductComponent,
    ViewFeedbackComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule,
    FooterComponent
  ]
})
export class AdminModule { }
