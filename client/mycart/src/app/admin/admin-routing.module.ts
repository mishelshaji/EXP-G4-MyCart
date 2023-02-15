import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductsComponent } from './products/products.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'product/create', component: AddProductComponent },
      { path: 'feedback/view', component: ViewFeedbackComponent },
      { path: 'update', component:UpdateProductComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'categories/create', component: AddCategoriesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
