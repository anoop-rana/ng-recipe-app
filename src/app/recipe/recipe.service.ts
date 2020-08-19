import { Recipe } from './recipe.model';
import { ImagePath } from './ImagePath.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pasta', ImagePath.PASTA_desc, ImagePath.PASTA, [
      new Ingredient('Rice', 1),
      new Ingredient('French Fried', 2),
      new Ingredient('Maggie', 1),
      new Ingredient('French Fried', 2),
    ]),
    new Recipe(
      'Chicken Wings',
      ImagePath.Chicken_Wings_desc,
      ImagePath.Chicken_Wings,
      [new Ingredient('Meat', 1), new Ingredient('French Fried', 2)]
    ),
    new Recipe(
      'Raspberries',
      ImagePath.raspberries_desc,
      ImagePath.raspberries,
      [new Ingredient('Apple', 1), new Ingredient('Papaya', 2)]
    ),
    new Recipe(
      'Chicken Wings',
      ImagePath.Chicken_Wings_desc,
      ImagePath.Chicken_Wings,
      [new Ingredient('Chicken', 4)]
    ),
    new Recipe(
      'Raspberries',
      ImagePath.raspberries_desc,
      ImagePath.raspberries,
      [new Ingredient('Orange', 6), new Ingredient('Mango', 5)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
