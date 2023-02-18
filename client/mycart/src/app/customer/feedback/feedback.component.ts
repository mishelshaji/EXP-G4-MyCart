import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  model : FeedbackCreateDto = 
  {
    feedback: ''
  };

  constructor(
    private service: FeedbackService,
    private router:Router
    ){}

  onSubmit() {    
    this.service.feedback(this.model).subscribe({
      next:(Data)=>{
        console.log(Data);
      },
      error:(err)=>{
        console.error(err); 
      }
    })
  }
}

