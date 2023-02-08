import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShopify, faFacebook, faTwitter, faWhatsapp, faInstagram, faLinkedin, faGit } from "@fortawesome/free-brands-svg-icons";
import { RouterModule } from "@angular/router";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faShop = faShopify;
  faFb = faFacebook;
  faTw = faTwitter;
  faWtsapp = faWhatsapp;
  faInsta = faInstagram;
  faLin = faLinkedin;
  faGit = faGit
}
