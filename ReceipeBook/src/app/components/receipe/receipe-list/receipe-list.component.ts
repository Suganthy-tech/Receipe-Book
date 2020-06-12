import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Receipe } from '../receipe.modal';
import { receipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  public receipeList: Receipe[];
  constructor(private receipeservice: receipeService) { }

  ngOnInit() {
    this.receipeList = this.receipeservice.getReceipeList();
  }
  onClickReceipe(receipe: Receipe) {
    this.receipeservice.selectedReceipe.emit(receipe);
  }
}
