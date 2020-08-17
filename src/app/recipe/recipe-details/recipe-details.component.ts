import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent {
  @Input() recipeSelected: Recipe;
}
