import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent {
  feedbackItem: any;

  constructor(private feedbackService: FeedbackService) {
    console.log(this.feedbackItem)
    this.feedbackItem = this.feedbackService.getAll();
  }
}
