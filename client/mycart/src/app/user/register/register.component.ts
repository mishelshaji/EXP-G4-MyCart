import { Component, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { concatWith } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private router: Router, private service: AccountService) {

  }
  
  model: customerCreateDto = {
    name: '',
    email: '',
    phone: '',
    dateOfBirth: new Date,
    password: '',
    cpassword: ''
  };

  displayPasswordError: Boolean = false;
  status: boolean = false;
  handleDob(dob: any) {
    let userDob = new Date(dob.value);
    // Substract Today's Date from User's Dob & output will be in milliseconds.
    const timeDiff = Math.abs(Date.now() - userDob.getTime());
    // Converts from milliseconds to minutes.
    const timeDiffHour = timeDiff / 60000;
    // Converts from Minutes to Years.
    const ageInYears = timeDiffHour / 525600;

    if (ageInYears > 0 && ageInYears < 120) {
      if (ageInYears < 18) {
        this.status = true;
      } else {
        this.status = false;
      }
    }
  }

  storePassword(password: NgModel) {
    this.model.password = password.value;
  }

  handlePassword(cpassword: NgModel) {
    let confirmPassword = cpassword.value;
    if (confirmPassword !== this.model.password) {
      this.displayPasswordError = true;
    } else {
      this.displayPasswordError = false;
    }
  }

  onSubmit() {
    this.service.create(this.model).subscribe({
      next: (response: any) => {
          if(response == null){
            let routeToLogin = confirm("Registration Successful");
            if(routeToLogin){
            this.router.navigate(['/login']);
            }
          }else {
            alert("Registration Failed");
          }
      },
      error: (errors: any) =>{
          console.log(errors);
      }
    })
  }
}
