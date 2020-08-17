import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ImagePath } from '../ImagePath.model';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {
    this.recipes = [
      new Recipe('Pasta', ImagePath.PASTA_desc, ImagePath.PASTA),
      new Recipe(
        'Chicken Wings',
        ImagePath.Chicken_Wings_desc,
        ImagePath.Chicken_Wings
      ),
      new Recipe(
        'Raspberries',
        ImagePath.raspberries_desc,
        ImagePath.raspberries
      ),
      new Recipe(
        'Chicken Wings',
        ImagePath.Chicken_Wings_desc,
        ImagePath.Chicken_Wings
      ),
      new Recipe(
        'Raspberries',
        ImagePath.raspberries_desc,
        ImagePath.raspberries
      ),
    ];
  }

  onRecipeClick(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }
}
