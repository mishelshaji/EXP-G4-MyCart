import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  faCart = faCartFlatbedSuitcase as IconProp;
  cartItems: any;

  constructor(private cartService: CartService) {
    console.log(this.cartItems)
    setTimeout(() => {
      this.cartItems = this.cartService.getAll();
    }, 1000);
  }

  deleteItem(id: number) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id === id) {
        this.cartItems.splice(i, 1);
        break;
      }
    }
  }
}
