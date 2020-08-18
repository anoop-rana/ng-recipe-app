import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 2),
    new Ingredient('Banana', 2),
    new Ingredient('Mango', 2),
    new Ingredient('Cherry', 2),
  ];

  constructor() {}

  ngOnInit() {
    // this.ingredients.push(new Ingredient('Apple', 2));
    // this.ingredients.push(new Ingredient('Banana', 2));
    // this.ingredients.push(new Ingredient('Mango', 2));
    // this.ingredients.push(new Ingredient('Cherry', 2));
    // this.ingredients = [
    //   new Ingredient('Apple', 2),
    //   new Ingredient('Banana', 2),
    //   new Ingredient('Mango', 2),
    //   new Ingredient('Cherry', 2),
    // ];
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
