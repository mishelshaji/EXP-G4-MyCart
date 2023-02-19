import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  FeedbackView: FeedbackViewDto[] = [];

  constructor(private service: FeedbackService ) { }

  ngOnInit() {
    this.service.getAll().subscribe({
      next: (response: any) => {
        this.FeedbackView = response;
        if(response != null) {
          console.log("result successs");
        }
      },
      error: (errors: any) => {
        console.log(errors);
      }

    })
  }
}
