import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = "https://localhost:7191/api/Customer/Cart";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CartViewDto[]>(this.url);
  }

  Create(cartItem: CartCreateDto) {
    return this.http.post<CartCreateDto>(this.url, cartItem);
  }

  delete(cartId: number) {
    return this.http.delete(`${this.url}/${cartId}`);
  }
}
