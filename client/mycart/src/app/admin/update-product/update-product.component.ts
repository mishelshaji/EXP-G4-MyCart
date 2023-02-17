import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  productId: number | undefined;

  constructor(
    private services: ProductsService,
    private router: Router,
    private route: ActivatedRoute) {
    this.productId = route.snapshot.params['id'];
  }

  model = {
    image: '',
    category: '',
    pname: '',
    bname: '',
    description: '',
    mrp: '',
    offer: '',
    quantity: ''
  };

  ngOnInit() {
    if (this.productId == null) {
      return null;
    }
    this.services.getById(this.productId).subscribe({
      next: (result: any) => {
        this.model = result;
      },
      error: (errors) => {
        console.log(errors);
        if(errors == 404){
          return;
        }     
      }
    });
    return true;
  }
  onSubmit() {
  }
}
