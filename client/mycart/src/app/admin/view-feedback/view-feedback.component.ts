import { Component, OnInit } from '@angular/core';
import { ViewFeedbackService } from 'src/app/services/view-feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
  FeedbackView: FeedbackViewDto[] | null = null;

  constructor(private service: ViewFeedbackService) { }

  ngOnInit() {
    this.service.getAll().subscribe({
      next: (Data) => {
        console.log(Data);
        this.FeedbackView = Data;
      }
    })
  }
}
