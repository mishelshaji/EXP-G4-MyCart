import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  
  productId: number;

  model = {
    categoryId: 0,
    name: '',
    brand: '',
    description: '',
    retailPrice: 0,
    offerPrice: 0,
    stock: 0
  };

  constructor(private service: ProductsService,
    private route: ActivatedRoute) {
      this.productId = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getByIdForUser(this.productId).subscribe({
      next: (result: any) => {
        this.model.name = result.name;
        this.model.description = result.description;
        this.model.brand = result.brand;
        this.model.offerPrice = result.price.offerPrice;
        this.model.retailPrice = result.price.retailPrice;
      }
    });
  }
}
