import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailRegex, getUser, RoutePaths } from '@acme/shared';
import { AuthService } from '@acme/shared';

@Component({
  selector: 'acme-bank-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  loginForm: FormGroup;
  emailPattern = emailRegex;
  showPassword = false;
  
  constructor(private formBuilder: FormBuilder, public router: Router, private authService: AuthService ) {
    if(getUser()){
      this.router.navigate([RoutePaths.PROFILE])
    }
    this.loginForm = this.formBuilder.group({
        email: ["", [Validators.required]],
        password: ["", Validators.required],
    });
  }

  /**
   * Will save user and redirects to profile route
   * @returns nothing
   */
  signIn(loginForm: FormGroup) {
    if(loginForm.valid){
      this.authService.userloggedIn.next(true);
      localStorage.setItem("user", loginForm.value.email)
      this.router.navigate([RoutePaths.PROFILE])
    }
  }

  /**
   * Will toggle showPassword to show/hide password
   * @returns nothing
   */
  showHidePassword(show: boolean) {
      this.showPassword = show;
  }
}
