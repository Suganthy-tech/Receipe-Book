import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipe.modal'
import { shoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { receipeService } from '../receipe.service';
@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  selectedReceipeDetails: Receipe;
  id: number;

  constructor(private shoppingService: shoppingListService, private receipeService: receipeService, private route: Router,
    private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe((ele: Params) => {
      this.id = +ele['id'];
      this.selectedReceipeDetails = this.receipeService.getReceipeById(this.id);
    });

  }

  onAddingShoppingListToIngredient() {
    this.shoppingService.addIngredients(this.selectedReceipeDetails.ingredient);
  }
  onEditReceipe() {
    this.route.navigate(['edit'], { relativeTo: this.routes });
  }
}
