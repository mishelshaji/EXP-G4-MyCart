import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  feedbackView: FeedbackViewDto[] = [];

  constructor(private service: FeedbackService, private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe({
      next: (response: any) => {
        this.feedbackView = response;
      }
    })
  }
}
