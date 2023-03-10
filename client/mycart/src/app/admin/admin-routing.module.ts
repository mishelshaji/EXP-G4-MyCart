import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductsComponent } from './products/products.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'products/create', component: AddProductComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'feedback/view', component: ViewFeedbackComponent },
      { path: 'products/update/:id', component: UpdateProductComponent },
      { path: 'categories/create', component: AddCategoriesComponent },
      { path: 'order/view', component: ViewOrdersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
