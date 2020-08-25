import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ImagePath } from '../ImagePath.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeAdded.subscribe((recipeCol: Recipe[]) => {
      this.recipes = recipeCol;
    });
  }
}
