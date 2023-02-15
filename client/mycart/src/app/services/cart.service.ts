import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [
    {
      id: 1,
      product: {
        id: 1,
        name: 'product 1',
        price: 100,
        description: 'This is product 1'
      },
      quantity: 4,
      userId: 1
    },
    {
      id: 2,
      product: {
        id: 2,
        name: 'product 2',
        price: 200,
        description: 'This is product 2'
      },
      quantity: 3,
      userId: 1
    }

  ]

  constructor() { }

  getAll() {
    return this.cartItems;
  }
}
