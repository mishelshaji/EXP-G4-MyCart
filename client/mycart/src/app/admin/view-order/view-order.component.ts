import { Component } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent {
  orders = [
    {
      customerId: 1,
      orderItemId: 5,
      orderedDate: '15-02-2023',
      deliveryAddress: 'Kochi',
      totalAmount: 2000,
      status: 'Delivered'

    },
    {
      customerId: 2,
      orderItemId: 4,
      orderedDate: '16-02-2023',
      deliveryAddress: 'Kannur',
      totalAmount: 4000,
      status: 'Not-Delivered'

    }
  ]
}
