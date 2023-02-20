import { Component } from '@angular/core';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  cartItems: CartViewDto[] | null = [];

  model = {
    deliveryAddress : '',
    totalPrice: 0
  }

  constructor(private cartService: CartService, private orderService: OrderService) { }

  ngOnInit() {
    this.cartService.getAll().subscribe({
      next: (response: any) => {
        this.cartItems = response.result;
        this.cartItems?.forEach((m:any)=> {
          this.model.totalPrice += m.product.price.offerPrice;
        })
      }
    });
  }

  onSubmit() {
    this.orderService.postOrders(this.model).subscribe({
      next: (response: any) => {
        if(response.isvalid) {
          alert("Order placed Successfully");
        }
      }
    });
  }
}
