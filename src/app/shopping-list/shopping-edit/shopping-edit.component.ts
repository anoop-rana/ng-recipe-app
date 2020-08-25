import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    const nameVal = this.nameRef.nativeElement.value;
    const amountVal = this.amountRef.nativeElement.value;
    var ingredient: Ingredient = new Ingredient(nameVal, amountVal);
    this.shoppingListService.addIngredient(ingredient);
  }
}
