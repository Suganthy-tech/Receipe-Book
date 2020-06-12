import { Ingredient } from '../shared/Ingredient.modal';
import { EventEmitter } from '@angular/core';
export class shoppingListService {
    ingredientListChanged = new EventEmitter<Ingredient[]>();
    private ingredientList: Ingredient[] =
        [new Ingredient('Apple', 4), new Ingredient('tomotoes', 5)];
    getIngredientList() {
        return this.ingredientList.slice();
    }
    addedIngredient(IngredientItem: Ingredient) {
        this.ingredientList.push(IngredientItem);
        this.ingredientListChanged.emit(this.ingredientList.slice());
    }
    addIngredients(ingredientLists: Ingredient[]) {
        this.ingredientList.push(...ingredientLists);
        this.ingredientListChanged.emit(this.ingredientList.slice());
    }
}