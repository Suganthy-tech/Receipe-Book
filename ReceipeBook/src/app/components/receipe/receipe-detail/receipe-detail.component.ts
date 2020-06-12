import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipe.modal'
import { shoppingListService } from '../../shopping-list/shopping-list.service';
@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  @Input() selectedReceipeDetails: Receipe;
  constructor(private shoppingService: shoppingListService) { }

  ngOnInit() {
  }

  onAddingShoppingListToIngredient() {
    this.shoppingService.addIngredients(this.selectedReceipeDetails.ingredient);
  }
}
