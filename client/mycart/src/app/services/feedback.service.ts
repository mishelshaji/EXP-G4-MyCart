import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
    url = "https://localhost:7191/api";

    constructor(private http: HttpClient) {}

    feedback(model: FeedbackCreateDto){
        return this.http.post(this.url + "/FeedbackCreate", model);
    }
}
