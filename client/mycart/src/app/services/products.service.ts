import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "https://localhost:7036/api/admin/products";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ProductViewDto[]>(this.url);
  }
}
