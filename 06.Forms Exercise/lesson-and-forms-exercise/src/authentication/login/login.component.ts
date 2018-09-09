import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: LoginModel;
  public error: Boolean;
  public errorMessage: String;

  constructor(private authService: AuthService, private router: Router) {
    this.model = new LoginModel("", "");
    this.error = false;
    this.errorMessage = "";
  }

  ngOnInit() {
  }

  login() {

    this.authService
      .login(this.model)
      .toPromise()
      .then((res: any) => {
        this.authService.authtoken = res._kmd.authtoken;
        this.authService.username = res.username;
        localStorage.setItem("authtoken", res._kmd.authtoken);
        localStorage.setItem('username', res.username);

        this.router.navigate(['/']);

      }).catch(err => {

        if (err) {
          this.error = true;
          this.errorMessage = err.error.description;
        }
      });
  }
}
