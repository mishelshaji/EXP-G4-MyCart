import { Component } from '@angular/core';
import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    faCart = faCartFlatbedSuitcase;
}
