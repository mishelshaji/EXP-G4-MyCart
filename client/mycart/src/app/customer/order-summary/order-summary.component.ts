import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  cartItems: CartViewDto[] | null = [];
  totalAmount: number = 0;

  model = {
    deliveryAddress : '',
    totalPrice: this.totalAmount
  }

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getAll().subscribe({
      next: (response: any) => {
        this.cartItems = response.result;
        this.cartItems?.forEach((m:any)=> {
          this.totalAmount += m.product.price.offerPrice;
        })
      }
    });
  }

  onSubmit() {
    console.log(this.model);    
  }
}
