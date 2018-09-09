import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public model: RegisterModel;
  public error: Boolean;
  public errorMessage: String;

  constructor(private authService: AuthService, private router: Router) {
    this.model = new RegisterModel("", "", "", "", "", 18);
    this.error = false;
    this.errorMessage = "";
  }

  ngOnInit() {
  }

  register() {

    this.authService
      .register(this.model)
      .toPromise()
      .then((res: any) => {

        this.router.navigate([
          '/login'
        ]);

      }).catch(err => {
        this.error = true;
        this.errorMessage = err.error.description;
      });
  }
}
