import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {
    url = "https://localhost:7191/api";

    constructor(private http: HttpClient) {

    }

    feedback(model: FeeddbackCreateDto){
        return this.http.post(this.url + "/FeedbackCreate", model);
    }
}
