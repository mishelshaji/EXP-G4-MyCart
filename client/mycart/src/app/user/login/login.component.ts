import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TokenHelper } from 'src/Utlis/Helpers/TokenHelper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private services: AccountService,
    private router: Router,
    private tokenHelper: TokenHelper
  ) { }

  model: LoginDto = {
    email: '',
    password: ''
  };

  onSubmit() {
    this.services.login(this.model).subscribe({
      next: (response: any) => {
        this.tokenHelper.setToken(response.result);
        this.router.navigateByUrl('/customer/home');
      },
      error: (errors: any) => {}
    });
  }
}