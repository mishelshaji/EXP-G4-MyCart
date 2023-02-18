import { Component } from '@angular/core';
import { FeedbackServiceService } from 'src/app/services/feedback.service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  model : FeeddbackCreateDto = 
  {
    email: '',
    fullname: '',
    feedback: ''
  };

  constructor(
    private service: FeedbackServiceService
    ){}

  onSubmit() {
    this.service.feedback(this.model).subscribe()
  }
}

