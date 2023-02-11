import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShopify, faFacebook, faTwitter, faWhatsapp, faInstagram, faLinkedin, faGit } from "@fortawesome/free-brands-svg-icons";
import { RouterModule } from "@angular/router";
import { IconProp } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faShop = faShopify as IconProp;
  faFb = faFacebook as IconProp;
  faTw = faTwitter as IconProp;
  faWtsapp = faWhatsapp as IconProp;
  faInsta = faInstagram as IconProp;
  faLin = faLinkedin as IconProp;
  faGit = faGit as IconProp;
}
