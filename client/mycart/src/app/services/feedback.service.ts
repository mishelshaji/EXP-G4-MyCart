import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  feedbackItem = [
    {
      id: 1,
      name: 'Anna Mary',
      email: 'anna123@gmail.com',
      description: 'My Cart has good customer service and quality products.'
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'johndoe97@gmail.com',
      description: 'Customer friendly and good services.'
    }

  ]

  constructor() { }

  getAll() {
    return this.feedbackItem;
  }
}
