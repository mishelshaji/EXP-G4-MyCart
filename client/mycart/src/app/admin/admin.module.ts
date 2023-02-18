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
import { HomePageComponent } from '../shared/home-page/home-page.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductsComponent } from './products/products.component';
import { FeedbackItemComponent } from './shared/feedback-item/feedback-item.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewCategoryComponent } from './view-category/view-category.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminLayoutComponent,
    AdminNavbarComponent,
    AddProductComponent,
    ViewFeedbackComponent,
    AddCategoriesComponent,
    DropdownComponent,
    UpdateProductComponent,
    ProductsComponent,
    FeedbackItemComponent,
    ViewOrderComponent,
    ViewCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule,
    FooterComponent,
    NgbDropdownModule
  ]
})
export class AdminModule { }
