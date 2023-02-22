import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { TokenHelper } from 'src/Utlis/Helpers/TokenHelper';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private services: AccountService,
    private router: Router,
    private tokenHelper: TokenHelper,
    private toaster: ToastrService
  ) { }

  model: LoginDto = {
    email: '',
    password: ''
  };

  onSubmit() {
    this.services.login(this.model).subscribe({
      next: (response: any) => {
        this.tokenHelper.setToken(response.result);
        this.toaster.success("Successfull", "Login");
        this.router.navigateByUrl('/customer/home');
      },
      error: (errors: any) => {
        this.toaster.error("Invalid Email/Password", "Login");
      }
    });
  }
}