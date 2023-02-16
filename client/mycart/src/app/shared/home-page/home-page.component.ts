import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [CommonModule]
})
export class HomePageComponent {

  products:ProductViewDto[] | null = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAll().subscribe({
      next: (result: any) => {
        this.products = result;
        console.log(this.products);
      }
    });
  }
}

