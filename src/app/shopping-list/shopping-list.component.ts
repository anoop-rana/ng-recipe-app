import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor() {}

  ngOnInit() {
    this.ingredients = [
      new Ingredient('Apple', 2),
      new Ingredient('Banana', 2),
      new Ingredient('Mango', 2),
      new Ingredient('Cherry', 2),
    ];
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
