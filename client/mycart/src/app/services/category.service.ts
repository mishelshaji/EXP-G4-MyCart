import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  url = "https://localhost:7191/api/admin/category";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CategoryViewDto[]>(this.url).pipe(map((data: any) => data.result));
  }

  create(model: CategoryCreateDto) {
    return this.http.post<CategoryViewDto>(this.url, model);
  }
}
