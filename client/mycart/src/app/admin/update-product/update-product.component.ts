import { Component } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
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
