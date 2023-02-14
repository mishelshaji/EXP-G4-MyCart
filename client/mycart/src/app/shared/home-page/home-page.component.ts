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
  productsCards: any;

  constructor() {
    let obj = new ProductsService();
    this.productsCards = obj.getAll();
  }
}
