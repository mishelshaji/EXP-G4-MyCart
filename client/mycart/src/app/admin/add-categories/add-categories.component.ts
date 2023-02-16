import { Component } from '@angular/core';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {
  model = {
    name: '',
    description: ''
  };
  onSubmit(form: any) {
    console.log(form);
  }
}
