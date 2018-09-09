import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout()
      .toPromise()
      .then(res => {
        this.authService.authtoken = "";
        this.authService.username = "";
        localStorage.clear();

        this.router.navigate(['/login']);
      })
      .catch(err => console.log(err));
  }
}
