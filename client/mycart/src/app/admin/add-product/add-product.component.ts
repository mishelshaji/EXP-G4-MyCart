import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(
    private categoryService: CategoryService,
    private productService: ProductsService
  ) { }

  categories: CategoryViewDto[] = [];

  model = {
    categoryId: 0,
    name: '',
    brand: '',
    description: '',
    retailPrice: 0,
    offerPrice: 0,
    stock: 0
  };


  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: (result: any) => {
        this.categories = result;
      },
      error: (errors: any) => {
        console.log(errors);
      }
    });
  }

  test() {
    console.log(this.model.categoryId);
  }

  onSubmit() {
    this.productService.create(this.model).subscribe({
      next: (response: any) => {
        if (response.isValid) {
          alert("Product is Created");
        } else {
          alert("Sorry something went wrong..")
        }
      },
      error: (errors: any) => {
        if (errors != null) {
          alert("Something Wrong");
        }
      }
    })
  }
}
