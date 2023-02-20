import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "https://localhost:7191/api/customer/order";

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<OrderViewDto[]>(this.url);
  }

  postOrders(model: OrderCreateDto) {
    return this.http.post<OrderViewDto>(this.url, model);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }


}

