import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('amount') amountRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    const nameVal = this.nameRef.nativeElement.value;
    const amountVal = this.amountRef.nativeElement.value;
    const ingredient: Ingredient = new Ingredient(nameVal, amountVal);
    this.ingredientAdded.emit(ingredient);
  }
}
