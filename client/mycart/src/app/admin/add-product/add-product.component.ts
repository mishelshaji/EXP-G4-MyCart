import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  model = {
    image: '',
    category: '',
    pname: '',
    bname: '',
    description: '',
    mrp: '',
    offer: '',
    quantity: ''
  };
  onSubmit() {
  }
}
