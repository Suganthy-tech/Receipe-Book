import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.modal';
import { shoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientList: Ingredient[] = [];
  constructor(private shopingService: shoppingListService) { }

  ngOnInit() {
    this.ingredientList = this.shopingService.getIngredientList();
    this.shopingService.ingredientListChanged.subscribe((ele: Ingredient[]) => {
      this.ingredientList = ele;
    });
  }
  addedIngredient(IngredientItem: Ingredient) {
    this.shopingService.addedIngredient(IngredientItem);

  }
}
