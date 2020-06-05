import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientList: Ingredient[] = [new Ingredient('Apple', 4), new Ingredient('tomotoes', 5)];
  constructor() { }

  ngOnInit() {
  }

}
