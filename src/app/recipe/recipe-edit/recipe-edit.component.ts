import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { viewClassName } from '@angular/compiler';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
})
export class RecipeEditComponent implements OnInit {
  recipeID: Number = null;
  recipe: Recipe = null;
  isEditableRecipe: Boolean = false;

  @ViewChild('name') recipeNameRef: ElementRef;
  @ViewChild('description') descriptionRef: ElementRef;
  @ViewChild('imgPath') imgPathRef: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.recipeID = +param['id'];
      this.isEditableRecipe = Number.isNaN(+param['id']);
    });
    this.recipe = this.recipeService.getRecipeByIndex(this.recipeID);
  }

  onAddOrUpdateRecipe() {
    const nameVal = this.recipeNameRef.nativeElement.value;
    const descriptionVal = this.recipeNameRef.nativeElement.value;
    const imgPathVal = this.recipeNameRef.nativeElement.value;

    this.recipe = new Recipe(nameVal, descriptionVal, imgPathVal, []);
    this.recipeService.addOrUpdateRecipe(this.recipe);
  }

  onResetRecipe() {
    this.recipe = null;
    this.isEditableRecipe = false;
  }

  onCancelRecipe() {
    this.router.navigate(['recipes', 0]);
  }
}
