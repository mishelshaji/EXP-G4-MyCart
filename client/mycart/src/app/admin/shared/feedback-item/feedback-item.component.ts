import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css']
})
export class FeedbackItemComponent {

  @Input("item") feedbackItem: any;

}
