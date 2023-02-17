import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private service: ProductsService) {
  }

  products: ProductViewDto[] = [];

  faTrash = faTrash as IconProp;

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (result: any) => {
        this.products = result;
      },
      error: (errors: any) => {
        console.log(errors);
      }
    });
  }  

}
