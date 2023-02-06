import { Component } from '@angular/core';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrls: ['./customer-navbar.component.css']
})
export class CustomerNavbarComponent {
  faShop = faShopify;
}
