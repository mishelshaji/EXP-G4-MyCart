import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model = {
    fname: '',
    email: '',
    contact: '',
    dob: '',
    password: '',
    cpassword: ''
  };

  status: boolean = false;
  handleDob(dob: any) {
    let userDob = new Date(dob.value);
    // Substract Today's Date from User's Dob & output will be in milliseconds
    const timeDiff = Math.abs(Date.now() - userDob.getTime());
    // Converts from milliseconds to minutes 
    const timeDiffHour = timeDiff / 60000;
    // Converts from Minutes to Years
    const ageInYears = timeDiffHour / 525600;

    if (ageInYears > 0 && ageInYears < 120) {
      if (ageInYears < 18) {
        this.status = true;
        console.log("working");
      } else {
        this.status = false;
      }
    }
  }

  password: any;
  confirmPassword: any;
  displayPasswordError: boolean = false;

  storePassword(password: any) {
    this.password = password.value;
  }

  handlePassword(cpassword: any) {

    let confirmPassword = cpassword.value;
    if (confirmPassword !== this.password) {
      this.displayPasswordError = true;
    }
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
