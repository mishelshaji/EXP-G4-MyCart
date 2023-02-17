import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = "https://localhost:7191/api/Accounts";

  constructor(private http: HttpClient) { }

  login(model: LoginDto) {
    return this.http.post(this.url + "/login", model);
  }

  create(model: customerCreateDto ) {
    return this.http.post(this.url + "/customer/register", model)
  }
}
