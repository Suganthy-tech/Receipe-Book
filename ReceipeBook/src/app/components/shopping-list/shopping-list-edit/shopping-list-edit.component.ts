import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/Ingredient.modal';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('ingreName') ingreName: ElementRef;
  @ViewChild('ingreAmount') ingreAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    const ingredientName = this.ingreName.nativeElement.value;
    const ingredientAmount = this.ingreAmount.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount)
    this.ingredientAdded.emit(ingredient);
  }
}
