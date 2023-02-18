import { Component } from '@angular/core';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {
  categories = [
    {
      categoryId: 1,
      categoryName: 'SmartPhone',
      description: 'All kinds of SmartPhones'
    },
    {
      categoryId: 2,
      categoryName: 'Laptops',
      description: 'All kinds of Laptops'

    }
  ]
}
