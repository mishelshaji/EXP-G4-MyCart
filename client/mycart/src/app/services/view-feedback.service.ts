import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewFeedbackService {
  url = "https://localhost:7191/api/area";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<FeedbackViewDto[]>(this.url + "/Feedback");
  }
}
