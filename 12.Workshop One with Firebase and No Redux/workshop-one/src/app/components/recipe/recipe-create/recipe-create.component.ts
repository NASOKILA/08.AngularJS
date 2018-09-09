import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {

  constructor(
    private recipeService: RecipeService) { }

  ngOnInit() {
  }

  createRecipe(form: NgForm) {

    const name = form.value.name;
    const imagePath = form.value.imagePath;
    const description = form.value.description;

    this.recipeService
      .createRecipe(name, imagePath, description);
  }
}
