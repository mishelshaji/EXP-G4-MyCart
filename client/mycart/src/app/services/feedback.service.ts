import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

    url = "https://localhost:7191/api/admin/feedback";
    urlCustomer = "https://localhost:7191/api/Customer";


    constructor(private http: HttpClient) {}

    Create(model: FeedbackCreateDto){
        return this.http.post(this.urlCustomer + "/FeedbackCreate", model);
    }

    getAll() {
      return this.http.get<FeedbackViewDto[]>(this.url);
    }
}
