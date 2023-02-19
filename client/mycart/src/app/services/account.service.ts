import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  url = "https://localhost:7191/api/user/accounts";
  urlCustomer = "https://localhost:7191/api/customer";

  constructor(private http: HttpClient) { }

  login(model: LoginDto) {
    return this.http.post(this.url + "/login", model);
  }

  create(model: customerCreateDto ) {
    return this.http.post(this.url + "/customer/register", model);
  }

  getProfile() {
    return this.http.get(this.urlCustomer + "/profile");
  }
}
