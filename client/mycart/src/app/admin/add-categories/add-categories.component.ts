import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})

export class AddCategoriesComponent {

  constructor(private categoryService: CategoryService) {
  }
  model = {
    name: '',
    description: ''
  };

  onSubmit(form: any) {
    this.categoryService.create(this.model).subscribe({
      next: (response: any) => {
        if (response.isValid) {
          alert("Category is Created");
          form.reset();
        }
      },
      error: (errors: any) => {
        if (errors != null) {
          alert("Something Wrong");
        }
      }
    });
  }
}
