import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductsService,
    private router: Router) { }

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

  edit(productId: number) {
    this.router.navigate(['/admin/products/update/', productId]);
  }

  Delete(productId: number) {
    this.service.delete(productId).subscribe({
      next: (response: any) => {
        this.ngOnInit();
      }
    });
  }
}
