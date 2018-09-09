import { Component, OnInit } from '@angular/core';
import { FurntureService } from '../furnture.service';
import { FurnitureModel } from '../models/furniture.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})

export class MyFurnitureComponent implements OnInit {

  furnitures: Observable<FurnitureModel[]>;

  constructor(
    private furnitureService: FurntureService,
    private router: Router) { }

  ngOnInit() {

    this.furnitures = this.furnitureService.myFurniture();
  }

  delete(id: string) {
    this.furnitureService.deleteFurniture(id)
      .subscribe(data => {
        this.router.navigate(["/furniture/all"]);
      })
  }

}
