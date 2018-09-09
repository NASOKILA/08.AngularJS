import { Component, OnInit } from '@angular/core';
import { HomeService } from './homeService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  public someData: string;
  private homeService : HomeService;
  private gitgubProfileData;
  
  constructor(homeService:HomeService, private httpClient:HttpClient) {
    this.homeService = homeService;
    this.someData = this.homeService.getData();
   }

  ngOnInit() {
  
    this.homeService
      .getGitHubProfile("NASOKILA")
      .subscribe(
        data => { this.gitgubProfileData = data },
        err => { console.log(err) });
  }
}


