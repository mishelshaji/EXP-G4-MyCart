import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  productsCards:any;

  constructor(){
    let obj = new ProductsService();
    this.productsCards = obj.getAll();
  }
}
