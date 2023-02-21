import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  customerUrl = "https://localhost:7191/api/customer/order";
  adminUrl = "https://localhost:7191/api/admin/adminOrder";

  constructor(private http: HttpClient) {
  }

  postOrders(model: OrderCreateDto) {
    return this.http.post<OrderViewDto>(this.customerUrl, model);
  }

  getAllForAdmin() {
    return this.http.get<OrderViewDto[]>(this.adminUrl);
  }

  getForCustomers() {
    return this.http.get<OrderViewDto[]>(this.customerUrl)
  }
}

