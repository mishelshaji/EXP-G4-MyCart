import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  url = "https://localhost:7191/api/area/products";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ProductViewDto[]>(this.url).pipe(map((data: any) => data.result));
  }

  create(product: ProductCreateDto) {
    return this.http.post<ProductCreateDto>(this.url, product);
}

}
