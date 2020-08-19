import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent {
  @Input() recipeSelected: Recipe;

  constructor(private recipeService: RecipeService) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeSelected.ingredients
    );
  }
}
