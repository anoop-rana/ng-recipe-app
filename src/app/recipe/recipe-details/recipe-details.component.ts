import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'recipe-details',
  templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent implements OnInit {
  recipeSelected: Recipe;
  index: Number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.index = +param['id'];
      this.recipeSelected = this.recipeService.getRecipeByIndex(this.index);
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeSelected.ingredients
    );
    this.router.navigate(['shopping-list']);
  }
}
